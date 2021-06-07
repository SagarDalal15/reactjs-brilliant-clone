import React from "react";
import { useHistory } from "react-router";

import "./style.css";
import Header from "../../Header";
import { Button } from "@material-ui/core";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import CardHeader from "./CardHeader";
import Page1Footer from "./Page1Footer";

export default function Page1() {
  const history = useHistory();

  const onClickHandler = (e) => {
    history.push("/page2");
  };
  return (
    <div className="page1">
      <div className="page1-header">
        <Header />
      </div>
      <div className="page1-1">
        <div className="page1-body">
          <div className="page1-text">
            <div
              style={{ fontSize: "55px", fontWeight: "600", height: "90px" }}
            >
              Logic
            </div>
            <div style={{ fontSize: "25px" }}>
              Stretch your analytic muscles with knights, knaves, logic gates,
              and more!
            </div>{" "}
            <br />
            <div
              style={{
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              The beginning of our introductory math journey is Logic. Through
              these challenging problem solving exercises, you'll construct the
              critical thinking skills that are the basis for mathematical
              reasoning.
              <br /> <br />
              You'll use limited information to make predictions – eliminating
              the impossible to uncover the truth. This course builds up to some
              truly mind-bending challenges!
              <br /> <br />
              By the end of this course, you'll be able to spot logical
              fallacies, navigate some strategic game theory, understand machine
              logic, and use the symbolic languages of logic to understand fun
              riddles.
            </div>
          </div>

          <div className="page1-card">
            <img
              style={{ width: "244px", height: "254px" }}
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=508"
            ></img>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div>
                <span style={{ fontSize: "30px" }}>37</span>
                <br /> <br />{" "}
                <span style={{ opacity: "0.5" }}>Interactive quizzes</span>
              </div>
              <div>
                <span style={{ fontSize: "30px" }}>265+</span>
                <br /> <br />
                <span style={{ opacity: "0.5" }}> Concepts and exercises</span>
              </div>
            </div>
            <Button
              onClick={onClickHandler}
              style={{
                marginTop: "35px",
                width: "100%",
                backgroundColor: "black",
                height: "48px",
                color: "white",
              }}
              variant="contained"
            >
              S<span style={{ textTransform: "lowercase" }}>tart </span>&nbsp;C
              <span style={{ textTransform: "lowercase" }}>ourse</span>
            </Button>
          </div>
        </div>
      </div>

      <div style={{ padding: "0px 25px" }} className="page1-2">
        <CardHeader
          num="1"
          heading="Introduction"
          subHeading="Put your logic to the test with these warmups!"
        />
        <div className="page1-2-body">
          <Cards />
        </div>
      </div>

      <div style={{ padding: "0px 25px" }} className="page1-3">
        <CardHeader
          num="2"
          heading="The Rational Detective"
          subHeading="Eliminate the impossible and uncover the truth!"
        />
        <div className="page1-3-body">
          <Cards2 />
        </div>
      </div>

      <div style={{ padding: "0px 25px" }} className="page1-4">
        <CardHeader
          num="3"
          heading="Puzzles and Riddles"
          subHeading="Even trickier puzzles and the tools you need to solve them."
        />
        <div className="page1-4-body">
          <Cards3 />
        </div>
      </div>

      <div style={{ padding: "0px 25px" }} className="page1-5">
        <CardHeader
          num="4"
          heading="Multi-Level Thinking"
          subHeading="If you know that I know that you know... what then?"
        />
        <div className="page1-4-body">
          <Cards4 />
        </div>
      </div>
      <Page1Footer />
    </div>
  );
}
