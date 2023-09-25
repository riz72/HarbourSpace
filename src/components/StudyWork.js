import React from "react";
import "./styles/studyWork.css";


export default function StudyWork(props) {
  return (
    <div>
      <div className="commitment__section-study-work-commitment">
        <div className="commitment__section-study-work-padding">
          <p className="commitment__section-study-work-text">{props.title}</p>
          <p className="commitment__section-study-work-hours">{props.hours} hours / day</p>
        </div>
        <div className="commitment__section-study-work-hours-border" />
        <div className="commitment__section-study-work-padding">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
