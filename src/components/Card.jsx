import React from "react";

export function Card({ number, content }) {
  return (
    <div className="mx-16 my-12 py-4 bg-white rounded-bl-3xl shadow-lg">
      <div className="inline-block rounded-full bg-gray-200 my-2 px-3 py-1">
        {number}
      </div>
      <h1 className="font-bold text-gray-700 mb-4">Lorem Ipsum</h1>
      <p className="text-gray-500 text-center mb-8">{content}</p>
    </div>
  );
}

export function StepCard({ content, className }) {
  return (
    <div
      className={`flex-initial mx-16 my-12 py-4 px-4 bg-white rounded-lg shadow-lg ${
        className ? className : ""
      }`}
    >
      <div className="flex justify-end">
        <div className="inline-block my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="57"
            viewBox="0 0 56 57"
          >
            <g
              id="Group_7066"
              data-name="Group 7066"
              transform="translate(0.046 0.44)"
            >
              <ellipse
                id="Ellipse_28"
                data-name="Ellipse 28"
                cx="28"
                cy="28.5"
                rx="28"
                ry="28.5"
                transform="translate(-0.046 -0.44)"
                fill="rgba(60,0,255,0.2)"
              />
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M10,0,20,10,10,20,0,10Z"
                transform="translate(17.954 18.06)"
                fill="#3c00ff"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="text-left">
        <h2 className="text-gray-700 font-semibold">Lorem</h2>
        <p className="mt-2 text-gray-500 text-xs">{content}</p>
      </div>
    </div>
  );
}
