import React, { useState } from "react";
import SvgComponent from "./SvgComponent";
import Settings from "./Settings";

export default function Header({
  themes,
  setThemes,
  authed,
  setAuthed,
  userFoto,
  name,
  setName,
}) {
  const [showSettings, setShowSettings] = useState(false);

  let showFoto = authed && (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src={userFoto} />
      </div>
    </div>
  );

  let showName = authed && name;

  function handlerLogout() {
    setAuthed(false);
    setName("");
  }

  function showDemoModal() {
    document.querySelector(".demo-modal").classList.remove("hidden");
  }

  let out = (
    <div
      className={`w-full px-12 h-24 flex justify-between  items-center sm:flex-col sm:h-fit sm:p-3 ${
        themes ? "bg-stone-200" : "bg-stone-800"
      }`}
    >
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full  indent-6"
          onClick={showDemoModal}
        />
        <div className="absolute top-2 left-2">
          <SvgComponent name="search" themes={themes} />
        </div>
      </div>
      <div className="flex w-80 justify-around items-center">
        <div onClick={showDemoModal}>
          <SvgComponent name="telefon" themes={themes} />
        </div>
        <div onClick={showDemoModal}>
          <SvgComponent name="camera" themes={themes} />
        </div>
        <div
          className={`h-11 border-r border-solid ${
            themes ? "border-gray-500" : "border-white"
          }`}
        ></div>
        <div onClick={() => setThemes(!themes)}>
          <SvgComponent name={themes ? "sun" : "moon"} />
        </div>
        {showName}
        {showFoto}
        <div onClick={() => setShowSettings(!showSettings)}>
          <SvgComponent name="settings" themes={themes} />
        </div>
        <div onClick={handlerLogout}>
          <SvgComponent name="logout" themes={themes} setAuthed={setAuthed} />
        </div>
      </div>
      {showSettings && <Settings />}
    </div>
  );

  return out;
}
