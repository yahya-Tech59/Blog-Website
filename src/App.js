import React from "react";
import { useSelector } from "react-redux";
import { Blogs } from "./components/Blogs";
import { Homepage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import { selectSignedIn } from "./features/UserSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="app">
      <Homepage />
      <Navbar />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
