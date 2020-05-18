import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dotenv from "dotenv/config";
console.log(process.env);

ReactDOM.render(<App />, document.getElementById("root"));
