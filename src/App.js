// import "./tailwind.css";

import Content from "./components/Content";
import Footer from "./components/Footer";
import React from "react";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="content">
        <SideBar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
