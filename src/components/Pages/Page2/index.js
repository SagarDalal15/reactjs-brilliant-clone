import React, { useState } from "react";
import { useDrop } from "react-dnd";

import Header from "../../Header";
import "./style.css";
import Sidebar from "./Sidebar";

import Cartoon from "./Cartoon";

const items = [
  {
    id: 0,
    src: "https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png",
    type: "cartoon-down",
  },
  {
    id: 1,
    src: "https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png",
    type: "cartoon-down",
  },
  {
    id: 2,
    src: "https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png",
    type: "cartoon-down",
  },
];

export default function Page2() {
  const [downCartoon, setDownCartoon] = useState(items);
  const [upCartoon, setUpCartoon] = useState([]);

  const [{ isOver }, addtoUpRef] = useDrop({
    accept: "cartoon-down",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isCartoonOver }, removeRef] = useDrop({
    accept: "cartoon-up",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveCartoon = (item) => {
    if (item && item.type === "cartoon-down") {
      setUpCartoon([...upCartoon, item]);

      setDownCartoon(downCartoon.filter((i) => item.id !== i.id));
    } else {
      setDownCartoon([...downCartoon, item]);

      setUpCartoon(upCartoon.filter((i) => item.id !== i.id));
    }
  };

  return (
    <div className="page2">
      <Header />
      <Sidebar />
      <div style={{ paddingTop: "80px", paddingLeft: "230px" }}>
        <div className="page2-drag">
          <div
            ref={addtoUpRef}
            style={{
              marginTop: "40px",
              height: "200px",
              width: "428px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {upCartoon.map((e) => {
              return (
                <Cartoon
                  type="cartoon-up"
                  onMoveCartoon={moveCartoon}
                  id={e.id}
                  src={e.src}
                />
              );
            })}
          </div>

          <div
            ref={removeRef}
            style={{
              marginTop: "40px",
              height: "170px",
              width: "430px",
              display: "flex",
            }}
          >
            {downCartoon.map((e) => {
              return (
                <Cartoon
                  type="cartoon-down"
                  onMoveCartoon={moveCartoon}
                  id={e.id}
                  src={e.src}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
