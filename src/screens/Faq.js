import * as React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import "./styles/faq.css";
import { fetchData } from "../components/services/getData.service";

export default function Faq() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData.scholarship.faqs.items);
        setCategory(fetchedData.scholarship.faqs.categories);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const [filterCondition, setFilterCondition] = useState(data);
  return (
    <div>
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
                  title="Programme Conditions"
                  content={category}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="accordian">
            {data.map((item, i) => (
              <div className="item"  key={i} onClick={() => toggle(i)}>
                <div className="condition">
                  <h1>{item.type}</h1>
                  <div className="qaSection">
                    <div className="title">
                      <h2 className="title-heading">{item.question}</h2>
                      <div className="faq-button-div">
                        <button className="morph">
                          <span className={selected === i ? "minus" : "plus"}></span>
                        </button>
                      </div>
                    </div>
                    <div
                      className={selected === i ? "content show" : "content"}
                    >
                      {
                        item.answer.map((data,index)=>( <p  key={index}>{data.data}</p> ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
