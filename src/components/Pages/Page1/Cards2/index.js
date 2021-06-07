import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MyCard from "../../../MyCard";

import "./style.css";

export default function Cards2() {
  const [rowCSS, setRowCSS] = useState("cards2-rows");
  const [cards2CSS, setcards2CSS] = useState("cards2");
  const [gridButtonCSS, setGridButtonCSS] = useState("cards2-grid-button");

  const addItems = () => {
    setRowCSS("cards2-rows add");
    setcards2CSS("cards2 add");
    setGridButtonCSS("cards2-grid-button add");
  };

  return (
    <div className={cards2CSS}>
      <Row className={rowCSS}>
        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="Riddles of Order"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=560"
            text="What order do these racers finish in?"
          />
        </Col>

        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="Crafty Counting"
            text="Learn strategies for counting that go far beyond just counting."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=560"
          />
        </Col>

        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="Mystery Containers"
            text="What's in each of these mystery boxes?"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=560"
          />
        </Col>
        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="Futoshiki"
            text="Arrange the numbers to match the inequalities."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=560"
          />
        </Col>
        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="Shuffles"
            text="Where did everything get shuffled to?"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=560"
          />
        </Col>
        <Col xs={6} md={4} className="cards2-col">
          <MyCard
            locked="true"
            title="False Information"
            text="Solve problems where the people giving you hints might be lying."
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=560"
          />
        </Col>
      </Row>
      <div onClick={addItems} className={gridButtonCSS}>
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
