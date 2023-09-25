import * as React from "react";
import "./styles/aprenticeship.css";
import circleImg from "../assets/circle-pattern.svg";
import student from "../assets/student.jpg";

export default function Aprenticeship() {
  return (
    <div id="aprenticeship_section">
      <div className="aprenticeship">
        <div className="backgroundColors">
          <div className="aprenticeship__left-responsive-color"></div>
          <div className="aprenticeship__left-responsive-color-white"></div>
        </div>
        <div className="aprenticeship__left">
          <div className="apprenticeship__image">
            <div className="apprenticeship__image-circle-container">
              <img
                className="apprenticeship__image-circle-container-img"
                src={circleImg}
                alt="circle"
              />
            </div>
            <div className="apprenticeship__image-student-container">
              <img
                className="apprenticeship__image-student-container-img"
                src={student}
                alt="student"
              />
            </div>
          </div>
        </div>

        <div className="aprenticeship__right">
          <h3 className="aprenticeship__right-h3">About the apprenticeship</h3>
          <p className="aprenticeship__right-p">
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
    </div>
  );
}
