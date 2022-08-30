import React, { useState } from "react";
import FormAuth from "./FormAuth";
import Peoples from "./Peoples";
import Chat from "./Chat";
import Message from "./Message";

export default function Main({
  base,
  setBase,
  authed,
  setAuthed,
  userFoto,
  name,
  setName,
}) {
  const [targetTop, setTargetTop] = useState("");

  let wievs = authed ? (
    <Peoples
      base={base}
      setBase={setBase}
      authed={authed}
      setAuthed={setAuthed}
      userFoto={userFoto}
      name={name}
      setName={setName}
    />
  ) : (
    <FormAuth
      authed={authed}
      setAuthed={setAuthed}
      name={name}
      setName={setName}
    />
  );

  let out = (
    <div className="flex w-full h-5/6 p-3 items-center sm:flex-col sm:h-fit sm:min-h-5/6">
      {wievs}
      <div className="flex flex-col w-full h-full justify-between">
        <Chat
          base={base}
          setBase={setBase}
          targetTop={targetTop}
          setTargetTop={setTargetTop}
        />
        <Message
          base={base}
          setBase={setBase}
          authed={authed}
          name={name}
          targetTop={targetTop}
          setTargetTop={setTargetTop}
        />
      </div>
    </div>
  );

  return out;
}
