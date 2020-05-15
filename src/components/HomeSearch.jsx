import React, { useContext, useState } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

export default function HomeSearch() {
  const { searchTerm, setTerm } = useContext(BookContext);

  return (
    <>
      <GoogleAuth />
      <div className="home-form-container">
        <form className="flex-form">
          <input
            type="text"
            className="home-search"
            placeholder="What do you want to read?"
            autoComplete="off"
            value={searchTerm}
            onChange={setTerm}
          />
          <Link to="/books/list" className="searchInput" type="submit">
            Search
          </Link>
        </form>
      </div>
      <div className="fullscreen-video-wrap">
        {/* <video
          className="background-video"
          src={require("../media/New_Chapter_001_Videvo.mov")}
          autoPlay
          loop={true}
        ></video> */}
      </div>
    </>
  );
}
