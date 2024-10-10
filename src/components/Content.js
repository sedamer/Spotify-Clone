import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collection from "../views/Collection";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Search from "../views/Search";

function Content() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Content;
