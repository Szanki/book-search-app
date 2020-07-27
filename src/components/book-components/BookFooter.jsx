import React from "react";
import { IoMdStar } from "react-icons/io";

const getRandomGrade = () => {
  const grade = (Math.random() * 5).toFixed(1);
  console.log(grade);
  return grade;
};

export const BookFooter = () => {
  return (
    <div className="footer-container">
      <span className="footer-text">Average grade: </span>
      <span style={{ color: "#db2828" }}>
        <IoMdStar size={22} />
      </span>
      <span className="footer-rate">{getRandomGrade()} </span>
      <span className="footer-slash">/</span>
      <span className="footer-scale"> 5</span>
    </div>
  );
};
