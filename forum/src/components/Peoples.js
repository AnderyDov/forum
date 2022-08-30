import React, { useState } from "react";

export default function Peoples({ userFoto, name, base, setBase }) {
  const [showInput, setShowInput] = useState(false);

  function handlerAddTopic(e) {
    if (e.target.value !== "" && e.key === "Enter") {
      let date = new Date().getTime();
      fetch("/addtopic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          top: e.target.value,
          date: date,
          message: "New Topic has been created",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "this top already exists") {
            alert(res);
          } else {
            setBase(res);
          }
        });
    }
  }

  function handlerScaleAvatar(e) {
    let t = e.target;
    if (t.classList.contains("big")) {
      t.classList.remove("big", "cursor-zoom-out");
      t.classList.add("cursor-zoom-in");
      t.parentElement.style.cssText = "transform:none";
      t.parentElement.parentElement.classList.add("online");
    } else {
      t.classList.add("big", "cursor-zoom-out");
      t.parentElement.style.cssText =
        "transform:translate(60px, 60px) scale(4)";
      t.parentElement.parentElement.classList.remove("online");
    }
  }

  let button = showInput ? (
    <input
      type="text"
      placeholder="New Topic"
      className="input input-bordered input-xs w-full max-w-xs"
      onBlur={() => setShowInput(!showInput)}
      onKeyDown={handlerAddTopic}
    />
  ) : (
    <button className="btn btn-xs" onClick={() => setShowInput(!showInput)}>
      Create Topic
    </button>
  );

  let out = (
    <div className="card w-96 h-full bg-base-100 shadow-xl">
      <div className="card-body">
        <ul>
          <li>
            <div className="flex items-center">
              <div className="avatar online m-3 cursor-zoom-in">
                <div className="w-14 rounded-full" onClick={handlerScaleAvatar}>
                  <img src={userFoto} />
                </div>
              </div>
              <div className="flex-col">
                <h4 className="w-full text-center">{name}</h4>
                <p className="w-full text-center">{button}</p>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );

  return out;
}
