import React from "react";

import "./style.css";

export default function CardHeader(props) {
  return (
    <div className="card-header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              opacity: "1",
              marginLeft: "10px",
              marginTop: "7px",
              color: "#758bff",
              position: "absolute",
              zIndex: "20",
              fontSize: "18px",
            }}
          >
            {props.num}
          </span>
          <svg
            style={{ opacity: "0.3" }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-69f3b23e=""
          >
            <path
              d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z"
              fill="#758BFF"
              data-v-69f3b23e=""
            ></path>
          </svg>
        </div>
        &nbsp;
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70px",
            justifyContent: "space-between",
          }}
        >
          <span>{props.heading}</span>
          <span style={{ fontSize: "14px", opacity: "0.6" }}>
            {props.subHeading}
          </span>
        </div>
      </div>
    </div>
  );
}
