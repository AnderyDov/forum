import React, { useState } from "react";

export default function FormAuth({ authed, setAuthed, name, setName }) {
  const [pass, setPass] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [placeName, setPlaceName] = useState("name");
  const [placePass, setPlacePass] = useState("password");

  function handlerChangePass(e) {
    setPass(e.target.value);
    setPlacePass("password");
    if (e.target.value.length > 2) {
      setPassErr(false);
    }
  }

  function handlerChangeName(e) {
    setName(e.target.value);

    if (e.target.value !== "") {
      setNameErr(false);
      setPlaceName("name");
    }
  }

  function handlerReg() {
    if (pass.length > 2 && name !== "") {
      setNameErr(false);
      setPassErr(false);
      fetch("/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: name, pass: pass }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "this name is ocupanted") {
            setPlaceName(res);
            setName("");
            setNameErr(true);
          }
          if (res === "ok") {
            setAuthed(true);
          }
        });
    }
    if (pass.length < 3) {
      setPassErr(true);
      setPlacePass("password must be min 3 symbols");
      setPass("");
    }
    if (name === "") {
      setNameErr(true);
      setPlaceName("you are must input name");
    }
  }

  function handlerLog() {
    if (name !== "" && pass.length > 2) {
      fetch("/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: name, pass: pass }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "login or password is not valid") {
            setPlacePass(res);
            setPass("");
            setPassErr(true);
            setNameErr(true);
          }
          if (res === "ok") {
            setAuthed(true);
          }
        });
    }
    if (name === "") {
      setPlaceName("you are must input name");
      setNameErr(true);
    }
    if (pass.length < 3) {
      setPassErr(true);
      setPlacePass("pass word must be min 3 symbols");
      setPass("");
    }
  }

  const formRegistration = (
    <div className="card w-96 h-full bg-base-100 shadow-xl sm:w-80">
      <div className="card-body">
        <label className="label relative">
          <span
            className={`absolute top-12 right-4 text-red-500 text-2xl ${
              nameErr ? "block" : "hidden"
            }`}
          >
            *
          </span>
          Name
        </label>
        <input
          type="text"
          placeholder={placeName}
          className="input input-bordered"
          value={name}
          onChange={handlerChangeName}
        />
        <label className="label relative">
          Password
          <span
            className={`absolute top-12 right-4 text-red-500 text-2xl ${
              passErr ? "block" : "hidden"
            }`}
          >
            *
          </span>
        </label>
        <input
          type="password"
          placeholder={placePass}
          className="input input-bordered"
          value={pass}
          onChange={handlerChangePass}
        />
        <button className="btn btn-wide w-full" onClick={handlerReg}>
          Sing up
        </button>
        <button className="btn btn-wide w-full" onClick={handlerLog}>
          Sing in
        </button>
      </div>
    </div>
  );

  let out = formRegistration;

  return out;
}
