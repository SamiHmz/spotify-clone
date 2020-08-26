import React from "react";
import Footer from "../Footer/Fouter";
import Body from "../Body/Body";
import SideBare from "../SideBare/SideBare";
import "./Home.css";
function Home(props) {
  return (
    <div className="home">
      <SideBare />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
