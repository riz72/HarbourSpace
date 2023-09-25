import * as React from "react";
import { useState, useRef } from "react";
import "./styles/accordion.css";

type AccordionProps = {
  title: string,
  content: any,
};

export default function Accordion(props: AccordionProps) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div id="accordion__section">
      <div className="accordion__section-rows">
        <p className="accordion__title">Program Conditions</p>
        <p className="accordion__title-p">{props.title}</p>
        <button className="morph" onClick={toggleAccordion}>
          <span className={setActive ? "minus" : "plus"}></span>
        </button>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__container-text">
          <p className="accordion__text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
