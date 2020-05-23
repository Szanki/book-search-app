import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

export default function MyBookListTab({ isSignedIn, path, location }) {
  const RenderMyBookListTab = () => {
    if (location === "/books/list" && isSignedIn) {
      return (
        <Link to={path}>
          <li>My book list</li>
        </Link>
      );
    } else if (location === "/books/userbooks") {
      return (
        <Link to={path}>
          <li>Book Search</li>
        </Link>
      );
    } else {
      return (
        <Tooltip
          title="
          

          You need to log in to check your favorite books"
          placement="bottom"
          className="tooltip not-logged-my-book-list"
        >
          <li>My book list</li>
        </Tooltip>
      );
    }
  };
  return <>{RenderMyBookListTab()}</>;
}
