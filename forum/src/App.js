import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [base, setBase] = useState([]);
  const [themes, setThemes] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [name, setName] = useState("");

  let userFoto = "https://placeimg.com/192/192/people";

  useEffect(() => {
    fetch("/base")
      .then((res) => res.json())
      .then((res) => setBase(res))
      .catch(() => alert("the server is not responding"));
  }, []);

  let out = (
    <div
      className="app flex flex-col h-full justify-between items-center sm:h-fit"
      data-theme={themes ? "light" : "halloween"}
    >
      <DemoModal />
      <Header
        themes={themes}
        setThemes={setThemes}
        authed={authed}
        setAuthed={setAuthed}
        userFoto={userFoto}
        name={name}
        setName={setName}
      />
      <Main
        base={base}
        setBase={setBase}
        authed={authed}
        setAuthed={setAuthed}
        userFoto={userFoto}
        name={name}
        setName={setName}
      />
    </div>
  );

  return out;
}
