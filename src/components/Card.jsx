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
      className={`flex-initial mx-16 my-12 py-4 px-4 bg-white rounded-lg shadow-lg ${className}`}
    >
      <div className="flex justify-end">
        <div className="inline-block rounded-full bg-gray-200 my-2 px-4 py-4"></div>
      </div>
      <div className="text-left">
        <h2 className="text-gray-700 font-semibold">Lorem</h2>
        <p className="mt-2 text-gray-500 text-xs">{content}</p>
      </div>
    </div>
  );
}
