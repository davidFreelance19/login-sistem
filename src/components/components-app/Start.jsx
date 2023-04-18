import React from "react";

export default function Start({ bookmark  }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-bookmark"
      width="35"
      height="34"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="#fff"
      fill={`${bookmark  ? "#fff" : "transparent"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
    </svg>
  );
}
