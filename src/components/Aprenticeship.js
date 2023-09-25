import * as React from "react";
import "./styles/aprenticeship.css";
import circleImg from "../assets/circle-pattern.svg";
import student from "../assets/student.jpg";
import { fetchData } from "../components/services/getData.service";
import { useState, useEffect } from "react";
export default function Aprenticeship() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData.scholarship.about);
        console.log("data", fetchedData)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
    console.log("data", data)
  }, []);
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
          {data.map((item, i) => (
            <p className="aprenticeship__right-p" key={i}>
              {item.data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
