import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MyCard from "../../../MyCard";

import "./style.css";

export default function Cards3() {
  const [rowCSS, setRowCSS] = useState("cards3-rows");
  const [cards3CSS, setcards3CSS] = useState("cards3");
  const [gridButtonCSS, setGridButtonCSS] = useState("cards3-grid-button");

  const addItems = () => {
    setRowCSS("cards3-rows add");
    setcards3CSS("cards3 add");
    setGridButtonCSS("cards3-grid-button add");
  };

  return (
    <div className={cards3CSS}>
      <Row className={rowCSS}>
        <Col xs={6} md={4} className="cards3-col">
          <MyCard
            locked="true"
            title="Werewolves"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png?width=560"
            text="Who's a werewolf?"
          />
        </Col>

        <Col xs={6} md={4} className="cards3-col">
          <MyCard
            locked="true"
            title="Logical Language"
            text="Explore the logical use of the words 'and', 'or', and 'not'."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png?width=560"
          />
        </Col>

        <Col xs={6} md={4} className="cards3-col">
          <MyCard
            locked="true"
            title="If A, then B."
            text="If you do this quiz, you will learn about sentences like this one."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png?width=560"
          />
        </Col>
        <Col xs={6} md={4} className="cards3-col">
          <MyCard
            locked="true"
            title="Elimination Grids"
            text="Solve classic logic elimination puzzles."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png?width=560"
          />
        </Col>
        <Col xs={6} md={4} className="cards3-col">
          <MyCard
            locked="true"
            title="Jigsaw Map"
            text="Where do the pieces go on the map?"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png?width=560"
          />
        </Col>
      </Row>
      <div onClick={addItems} className={gridButtonCSS}>
        {" "}
        <div
          style={{
            height: "inherit",
            width: "inherit",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "20px",
            paddingBottom: "10px",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "28px" }}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MS45OTYgNDkxLjk5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkxLjk5NiA0OTEuOTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4NC4xMzIsMTI0Ljk4NmwtMTYuMTE2LTE2LjIyOGMtNS4wNzItNS4wNjgtMTEuODItNy44Ni0xOS4wMzItNy44NmMtNy4yMDgsMC0xMy45NjQsMi43OTItMTkuMDM2LDcuODZsLTE4My44NCwxODMuODQ4DQoJCQlMNjIuMDU2LDEwOC41NTRjLTUuMDY0LTUuMDY4LTExLjgyLTcuODU2LTE5LjAyOC03Ljg1NnMtMTMuOTY4LDIuNzg4LTE5LjAzNiw3Ljg1NmwtMTYuMTIsMTYuMTI4DQoJCQljLTEwLjQ5NiwxMC40ODgtMTAuNDk2LDI3LjU3MiwwLDM4LjA2bDIxOS4xMzYsMjE5LjkyNGM1LjA2NCw1LjA2NCwxMS44MTIsOC42MzIsMTkuMDg0LDguNjMyaDAuMDg0DQoJCQljNy4yMTIsMCwxMy45Ni0zLjU3MiwxOS4wMjQtOC42MzJsMjE4LjkzMi0yMTkuMzI4YzUuMDcyLTUuMDY0LDcuODU2LTEyLjAxNiw3Ljg2NC0xOS4yMjQNCgkJCUM0OTEuOTk2LDEzNi45MDIsNDg5LjIwNCwxMzAuMDQ2LDQ4NC4xMzIsMTI0Ljk4NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
          />
        </div>
      </div>
    </div>
  );
}
