import React, { useContext } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";

export default function HomeSearch() {
  // const { searchTerm, setTerm } = useContext(BookContext);

  return (
    <>
      <GoogleAuth />
      <div className="home-form-container">
        <form className="flex-form">
          <input
            type="text"
            placeholder="What do you want to read?"
            autoComplet="off"
            // value={searchTerm}
            // onChange={(e) => setTerm(e.target.value)}
          />
          <input type="submit" value="Search" />
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
