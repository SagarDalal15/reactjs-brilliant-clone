import React from "react";
import { useDrag } from "react-dnd";

export default function Cartoon(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: props.type,
    item: {
      type: props.type,
      id: props.id,
      src: props.src,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        props.onMoveCartoon(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      ref={dragRef}
      key={props.id}
      style={{ width: "140px" }}
      src={props.src}
    ></img>
  );
}
