import React from "react";

export default function DemoModal() {
  function hideDemoModal() {
    document.querySelector(".demo-modal").classList.add("hidden");
  }

  let out = (
    <div className="demo-modal card w-96 h-32 bg-base-100 shadow-xl hidden absolute inset-x-1/4 top-5 z-10 sm:left-0">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm" onClick={hideDemoModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h4>This option is not work in demo version</h4>
      </div>
    </div>
  );

  return out;
}
