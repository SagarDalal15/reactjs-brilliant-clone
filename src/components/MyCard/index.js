import React from "react";
import { Card } from "react-bootstrap";

import "./style.css";

export default function MyCard(props) {
  return (
    <div>
      <Card className="card">
        {props.locked ? (
          <div
            style={{
              height: "174px",
              margin: "24px",
              width: "288px",
              position: "absolute",
              display: "flex",
              backgroundColor: "rgba(0,0,0,0.7)",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "30px" }}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzNy4zMzMsMTkyaC0zMnYtNDIuNjY3QzQwNS4zMzMsNjYuOTksMzM4LjM0NCwwLDI1NiwwUzEwNi42NjcsNjYuOTksMTA2LjY2NywxNDkuMzMzVjE5MmgtMzIgICAgQzY4Ljc3MSwxOTIsNjQsMTk2Ljc3MSw2NCwyMDIuNjY3djI2Ni42NjdDNjQsNDkyLjg2NSw4My4xMzUsNTEyLDEwNi42NjcsNTEyaDI5OC42NjdDNDI4Ljg2NSw1MTIsNDQ4LDQ5Mi44NjUsNDQ4LDQ2OS4zMzMgICAgVjIwMi42NjdDNDQ4LDE5Ni43NzEsNDQzLjIyOSwxOTIsNDM3LjMzMywxOTJ6IE0yODcuOTM4LDQxNC44MjNjMC4zMzMsMy4wMS0wLjYzNSw2LjAzMS0yLjY1Niw4LjI5MiAgICBjLTIuMDIxLDIuMjYtNC45MTcsMy41NTItNy45NDgsMy41NTJoLTQyLjY2N2MtMy4wMzEsMC01LjkyNy0xLjI5Mi03Ljk0OC0zLjU1MmMtMi4wMjEtMi4yNi0yLjk5LTUuMjgxLTIuNjU2LTguMjkybDYuNzI5LTYwLjUxICAgIGMtMTAuOTI3LTcuOTQ4LTE3LjQ1OC0yMC41MjEtMTcuNDU4LTM0LjMxM2MwLTIzLjUzMSwxOS4xMzUtNDIuNjY3LDQyLjY2Ny00Mi42NjdzNDIuNjY3LDE5LjEzNSw0Mi42NjcsNDIuNjY3ICAgIGMwLDEzLjc5Mi02LjUzMSwyNi4zNjUtMTcuNDU4LDM0LjMxM0wyODcuOTM4LDQxNC44MjN6IE0zNDEuMzMzLDE5MkgxNzAuNjY3di00Mi42NjdDMTcwLjY2NywxMDIuMjgxLDIwOC45NDgsNjQsMjU2LDY0ICAgIHM4NS4zMzMsMzguMjgxLDg1LjMzMyw4NS4zMzNWMTkyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            />
          </div>
        ) : (
          <div></div>
        )}
        <Card.Img
          style={{ width: "336px", padding: "24px" }}
          variant="top"
          src={props.image}
        />
        <Card.Body style={{ padding: "0px 24px" }}>
          <Card.Title> {props.title}</Card.Title>
          <div
            style={{
              height: "68px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Text style={{ opacity: "0.5" }}>{props.text}</Card.Text>
            <div
              style={{
                height: "3px",
                backgroundColor: "rgba(0, 0, 0, 0.06)",
              }}
            ></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
