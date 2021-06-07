import React from "react";
import { Button } from "@material-ui/core";

import "./style.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-heading">
        <img style={{ width: "40px" }} src={logo}></img>{" "}
        <span style={{ padding: "0px 10px" }}>BRILLIANT</span>
      </div>
      <div className="header-links">
        <div>TODAY</div>
        <div>COURSES</div>
        <div>PRACTICE</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "380px",
          marginLeft: "auto",
          marginRight: "5%",
        }}
      >
        <Button
          style={{
            width: "182px",
            borderColor: "#049BE5",
            height: "32px",
            color: "#049BE5",
          }}
          variant="outlined"
        >
          L<span style={{ textTransform: "lowercase" }}>og in</span>
        </Button>
        <Button
          style={{
            width: "182px",
            backgroundColor: "#049BE5",
            height: "32px",
            color: "white",
          }}
          variant="contained"
        >
          S<span style={{ textTransform: "lowercase" }}>ign up</span>
        </Button>
      </div>
    </div>
  );
}
