import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import MainSlider from "./components/section/MainSlider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Study from "./components/section/Study";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <MainSlider attr={["section", "container"]} />
        <ImgText attr={["section", "nexon", "container", "gray"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Image attr="section nexon container" />
        <Banner attr={["section", "container"]} />
        <Study attr={["section", "container", "gray"]} />
      </Main>
      <Footer attr={["section", "nexon", "container", "gray"]} />
    </>
  );
}

export default App;
