import React from "react";
import image from "../img/bg.jpg";

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(30,42,54,0.9)),url('../img/bg.jpg')] bg-no-repeat bg-top bg-cover -z-10"></div>
  );
};

export default Background;
