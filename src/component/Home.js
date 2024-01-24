import React from "react";
import CardData from "./CardData";
import Slides from "./Slides";

const Home = () => {
  return (
    <div>
      <div>
        <Slides />
      </div>
      <div>
        <CardData/>
      </div>
     
    </div>
  );
};

export default Home;
