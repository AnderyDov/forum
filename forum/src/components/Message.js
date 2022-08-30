import React from "react";
import SvgComponent from "./SvgComponent";

export default function Message({
  base,
  setBase,
  authed,
  name,
  targetTop,
  setTargetTop,
}) {
  function showDemoModal() {
    document.querySelector(".demo-modal").classList.remove("hidden");
  }

  function handlerMessage(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      let date = new Date().getTime();
      fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          date: date,
          top: targetTop,
          message: e.target.value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (typeof res === "object") {
            e.target.value = "";
            setBase(res);
          } else {
            alert("Message has not been sent");
          }
        });
    }
  }

  let message;
  if (authed && targetTop !== "") {
    message = (
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Press enter for sent your message"
          className="input input-bordered w-full"
          onKeyDown={handlerMessage}
        />
        <div
          className="absolute bottom-2.5 right-1 cursor-pointer"
          onClick={showDemoModal}
        >
          <SvgComponent name={"clip_file"} />
        </div>
      </div>
    );
  } else if (authed && targetTop === "") {
    message = "Choose topics for sent message";
  } else {
    message = "Only authentificated users must write message";
  }

  let out = (
    <div className="card w-full bg-base-100 shadow-xl m-3 mb-0">
      <div className="card-body">{message}</div>
    </div>
  );

  return out;
}
