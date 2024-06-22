import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="project-box">
      <div className="left">
        <img src={props.imglink} alt="" />
      </div>
      <div className="right">
        <div className="heading">{props.heading}</div>
        <div className="tech">{props.tech}</div>
        <span
          className="web-link"
          onClick={() => {
            window.open(props.url, "_blank");
          }}
        >
          Link →
        </span>
        <div className="info">{props.info}</div>
      </div>
    </div>
  );
}
