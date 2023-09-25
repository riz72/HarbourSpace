import * as React from "react";
import "./styles/scholarshipValue.css";
import { useState, useEffect } from "react";
import { fetchData } from "../components/services/getData.service";
export default function ScholarshipValue() {
  const [totalValue, setTotalValue] = useState('');
  const [tutionFees, setTutionFees] = useState('');
  const [remainingValue, setRemainingValue] = useState('');
  const [stipendPerMonth, setStipendPerMonth] = useState('');
  const [stipendPerYear, setStipendPerYear] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setTotalValue(fetchedData.scholarship.total_value)
        setTutionFees(fetchedData.scholarship.tuition)
        setRemainingValue(fetchedData.scholarship.remaining)
        setStipendPerMonth(fetchedData.scholarship.stipend_per_month)
        setStipendPerYear(fetchedData.scholarship.stipend_per_year)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <div id="commitment__section">
      <div className="commitment__section-scholarshipValue">
        <div className="commitment__section-scholarshipValue-container-tall">
          <p className="commitment__section-scholarshipValue-text">
            Scholarship value
          </p>
          <p className="commitment__section-scholarshipValue-euro">€ {totalValue}</p>
        </div>
        <div className="commitment__section-scholarshipValue-border" />
        <div className="commitment__section-scholarshipValue-border-row">
          <div>
            <div className="commitment__section-scholarshipValue-text">
              Tution covered
            </div>
            <p className="text"> € {tutionFees}</p>
          </div>

          <div>
            <div className="commitment__section-scholarshipValue-text">
              Remaining
            </div>
            <p className="text"> € {remainingValue}</p>
          </div>
        </div>

        <div className="commitment__section-scholarshipValue-paddingStipend">
          <div className="commitment__section-scholarshipValue-text">
            Living stipend
          </div>
          <p className="text">€{stipendPerMonth} (€{stipendPerYear}/month)</p>
        </div>
      </div>
    </div>
  );
}
