import * as React from "react";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import "./styles/faq.css";

export default function Faq() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
    )
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.scholarship.what_you_will_learn.filter((item) => {
            return item.title;
          })
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="faq_section">
      <div className="faq">
        <div className="faq__left">
          <p>Frequently asked questions</p>
        </div>

        <div className="faq__right">
          <div className="faq__right-inner">
            <div>
              <p>Filter by : </p>
            </div>
            <div>
              <Button
                title="Program Conditions"
                content="
                <ul>
                <li>All</li>
                <li>Admissions</li>
                <li>Harbour.Space</li>
                <li>SCG</li>
                <li>Living in Bangkok</li>
                </ul>"
              />
            </div>
          </div>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <div>
            <Accordion title={item.title} content={item.data} />
          </div>
        );
      })}
    </div>
  );
}
