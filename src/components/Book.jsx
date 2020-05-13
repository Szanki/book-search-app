import React from "react";

export default function Book() {
  return (
    <div className="book-container">
      <img src={require("./images/img1.jpg")} alt="img" />
      <div className="book-content">
        <div className="header">title</div>
        <div className="subtitle">subtitle</div>
        <div className="text">desc</div>
      </div>
      <footer>
        <div className="movie-rating">
          rating
          <p className="star">&#9733;</p>
        </div>
      </footer>
    </div>
  );
}
