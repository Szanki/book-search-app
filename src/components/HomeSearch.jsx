import React, { useContext, useState } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import { Input } from '@material-ui/core';

export default function HomeSearch() {
  const { searchTerm, setTerm, fetchBooks, onSearchSubmit } = useContext(BookContext);

  return (
    <>
      <GoogleAuth />
      <div className="home-form-container">
        <div className="flex-form">
          {/* TODO: My suggestion is to move this input to new component ( new jsx file) */}
          <Input
            type="text"
            className="home-search"
            placeholder="What do you want to read?"
            autoComplete="off"
            value={searchTerm}
            onChange={setTerm}
            onSubmit={onSearchSubmit}
          />
          <Link to="/books/list" className="searchInput" onClick={fetchBooks}>
            Search
          </Link>
        </div>
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
