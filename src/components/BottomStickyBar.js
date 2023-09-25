import * as React from "react";
import "./styles/bottomStickyBar.css";
import { useState, useEffect } from "react";
import { fetchData } from "../components/services/getData.service";

export default function BottomStickyBar() {
  const [scholarshipLocation, setScholarshipLocation] = useState({});
  const [scholarshipStartDate, setScholarshipStartDate] = useState('');
  const [scholarshipEndDate, setScholarshipEndtDate] = useState('');
  const [scholarshipDuration, setScholarshipDuration] = useState('');
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setScholarshipDuration(fetchedData.scholarship.duration);
        setScholarshipLocation(fetchedData.scholarship.location); const formattedStartDate = formatDate(fetchedData.scholarship.scholarship_start_date);
        setScholarshipStartDate(formattedStartDate);
        const formattedEndDate = formatDate(fetchedData.scholarship.application_end_date);
        setScholarshipEndtDate(formattedEndDate);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <div id="bottomBar">
      <div id="property">
      <span id="title">Zeptolab</span>
        <span id="value">Marketing performance</span>
      </div>

      <div id="property">
      <span id="title">Location</span>
        <span id="value">{scholarshipLocation.name}</span>
      </div>

      <div id="property">
      <span id="title">Duration</span>
        <span id="value">{scholarshipDuration} Year Full-Time</span>
      </div>

      <div id="property">
      <span id="title">Start date</span>
        <span id="value">{scholarshipStartDate}</span>
      </div>

      <div id="property">
      <span id="title">Application deadline</span>
        <span id="value">{scholarshipEndDate}</span>
      </div>

      <div id="property">
      <span id="title">Application closes in</span>
        <span id="value">6 Day : 22 hours : 56 Min</span>
      </div>
    </div>
  );
}
