import React, { useState } from "react";

function FAQ({ question, answer }) {
  const [open, isOpen] = useState(false);
  return (
    <section className="w-full lg:w-1/2 md:mx-auto bg-cultured cursor-pointer p-2 md:p-4 my-2 md:my-4">
      <div
        className="flex justify-between items-center"
        onClick={() => isOpen((prev) => !prev)}
      >
        <p className="text-xs md:text-xl font-normal">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.98"
          height="19.98"
          viewBox="0 0 19.98 19.98"
        >
          <g
            id="Group_7073"
            dataName="Group 7073"
            transform="translate(-1072.482 0.457)"
          >
            <path
              id="Path_13758"
              data-name="Path 13758"
              d="M1093.526-.457v19.98"
              transform="translate(-11.055)"
              fill="none"
              stroke="#131313"
              strokeWidth="2"
            />
            <path
              id="Path_13759"
              data-name="Path 13759"
              d="M0,0V19.98"
              transform="translate(1092.461 9.533) rotate(90)"
              fill="none"
              stroke="#131313"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      {open && <p className="text-xs md:text-sm mt-4 font-normal">{answer}</p>}
    </section>
  );
}

export default FAQ;
