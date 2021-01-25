import React from "react";
import { Header } from "components";
import Footer from "components/Footer/Footer";
import StartPage1 from "components/StartPage1/StartPage1";
import StartPage2 from "components/StartPage2/StartPage2";
import StartPage3 from "components/StartPage3/StartPage3";

const index = () => {
  return (
    <div>
      <Header/>
      <StartPage1/>
      <StartPage2/>
      <StartPage3/>
      <Footer/>
    </div>
  );
};

export default index;
