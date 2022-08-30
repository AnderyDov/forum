import React, { useState, useEffect } from "react";

export default function Chat({ base, setBase, targetTop, setTargetTop }) {
  const [showMessages, setShowMessages] = useState(false);

  let listTopics = [...base].map((el, i) => el.top);
  listTopics = [...new Set(listTopics)];

  let topics = listTopics.map((el, i) => {
    return (
      <li className="flex flex-col cursor-pointer" key={i}>
        <p data-top={el} onClick={handlerChooseTop}>
          {el}
        </p>
        <hr />
      </li>
    );
  });

  let messages = [...base].map((el) => {
    if (targetTop === el.top) {
      return (
        <li className="flex flex-col" key={el.id}>
          <div className="flex items-center ">
            <div className="avatar online m-3">
              <div className="w-14 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="flex flex-col">
              <p>{el.name}</p>
              <p>
                {new Date(+el.date).toLocaleDateString() +
                  " " +
                  new Date(+el.date).toLocaleTimeString()}
              </p>
              <p>{el.message}</p>
            </div>
          </div>
          <hr />
        </li>
      );
    }
  });

  let buttonBack = (
    <button className="btn btn-sm w-12 mt-3" onClick={handlerShowMessage}>
      back
    </button>
  );

  useEffect(() => {
    document.querySelector(".overflow-auto").scrollTop =
      document.querySelector(".overflow-auto").scrollHeight;
  });

  function handlerShowMessage() {
    setShowMessages(false);
    setTargetTop("");
  }

  function handlerChooseTop(e) {
    setShowMessages(true);
    setTargetTop(e.target.dataset.top);
  }

  let out = (
    <div className="card w-full h-5/6 bg-base-100 shadow-xl m-3 overflow-auto">
      <div className="card-body h-full">
        <ul>{showMessages ? messages : topics}</ul>
        {targetTop !== "" && buttonBack}
        <br />
      </div>
    </div>
  );

  return out;
}
