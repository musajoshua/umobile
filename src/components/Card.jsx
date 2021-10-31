import React from "react";

export function Card({ number, content }) {
  return (
    <div className="mx-8 my-6 md:mx-16 md:my-12 py-4 bg-white rounded-bl-3xl shadow-lg">
      <div className="inline-block rounded-full bg-gray-200 my-2 px-3 py-1">
        {number}
      </div>
      <h1 className="font-bold text-gray-700 mb-4">Lorem Ipsum</h1>
      <p className="text-gray-500 text-center mb-8">{content}</p>
    </div>
  );
}

export function CircularCard({ svg, title, content, className }) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-72 h-72 p-4 bg-white rounded-full shadow-lg ${
        className && className
      }`}
    >
      <div className="mt-8">
        <img src={svg} alt="svg" />
      </div>
      <div className="m-2 p-4 text-center">
        <h1 className="font-bold text-gray-700 mb-4">{title}</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">{content}</p>
      </div>
    </div>
  );
}

export function StepCard({ iconLeft, content, className }) {
  return (
    <div
      className={`flex flex-col py-4 px-4 bg-white rounded-lg shadow-lg ${
        className ? className : ""
      }`}
    >
      <div className={`flex ${iconLeft ? "justify-start" : "justify-end"}`}>
        <div className="inline-block my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28.5"
            viewBox="0 0 28 28.5"
          >
            <g
              id="Group_7190"
              data-name="Group 7190"
              transform="translate(0.047 0.44)"
            >
              <ellipse
                id="Ellipse_28"
                data-name="Ellipse 28"
                cx="14"
                cy="14.25"
                rx="14"
                ry="14.25"
                transform="translate(-0.047 -0.44)"
                fill="rgba(60,0,255,0.2)"
              />
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M10,0,20,10,10,20,0,10Z"
                transform="translate(3.953 3.81)"
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
