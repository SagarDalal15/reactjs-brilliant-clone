import React from "react";

import "./style.css";

export default function Page1Footer() {
  return (
    <div className="page1-footer">
      <div
        className="page1-footer-inner-wrapper"
        style={{
          width: "680px",
          height: "30px",
          fontSize: "14px",
          opacity: "0.5",
        }}
      >
        NEXT STEPS
      </div>
      <div
        className="page1-footer-inner"
        style={{
          display: "flex",
          width: "680px",
          height: "170px",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "325px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "90px" }}
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=184"
          ></img>
          <div style={{ padding: "10px", fontSize: "14px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                padding: "0px 10px",
              }}
            >
              Mathematical Fundamentals
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                paddingLeft: "10px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              The essential tools for mastering algebra, logic, and number
              theory!
            </div>
          </div>
        </div>

        <div
          style={{
            width: "325px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "90px" }}
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=184"
          ></img>
          <div style={{ padding: "10px", fontSize: "14px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                padding: "0px 10px",
              }}
            >
              Mathematical Fundamentals
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                paddingLeft: "10px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              The essential tools for mastering algebra, logic, and number
              theory!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
