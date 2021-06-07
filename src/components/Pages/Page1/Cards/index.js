import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import MyCard from "../../../MyCard";

import "./style.css";

export default function Cards() {
  const [rowCSS, setRowCSS] = useState("cards-rows");
  const [cardsCSS, setcardsCSS] = useState("cards");
  const [gridButtonCSS, setGridButtonCSS] = useState("cards-grid-button");

  const addItems = () => {
    setRowCSS("cards-rows add");
    setcardsCSS("cards add");
    setGridButtonCSS("cards-grid-button add");
  };

  const history = useHistory();

  const onClickHandler = () => {
    history.push("/page2");
  };

  return (
    <div className={cardsCSS}>
      <Row className={rowCSS}>
        <Col xs={6} md={4} className="cards-col">
          <div onClick={onClickHandler}>
            <MyCard
              title="Warmup Puzzles"
              image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=560"
              text="Get started with some logic warmups."
            />
          </div>
        </Col>

        <Col xs={6} md={4} className="cards-col">
          <MyCard
            title="Truth-Seeking"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=560"
            text="Who or what is telling the truth?"
          />
        </Col>

        <Col xs={6} md={4} className="cards-col">
          <MyCard
            title="Strategic Deductions"
            image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=560"
            text="Stretch the information you're given as far as it can go"
          />
        </Col>
      </Row>
      <div onClick={addItems} className="cards-grid-button"></div>
    </div>
  );
}
