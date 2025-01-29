import React from "react";
import "./App.css";
import MyPhoto from "./Assets/MyPhoto.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I'm Theertha.</h1>
      <p>I am Theertha, a passionate student with expertise in AI and Web Development.</p>
      <img src = {MyPhoto} alt="MyPhoto" width  = "300" height = "400" />
    </div>
  );
};

export default Home;