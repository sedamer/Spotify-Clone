import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collection from "../views/Collection";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Search from "../views/Search";

function Content() {
  return (
    <BrowserRouter>
      <main className="flex-auto overflow-auto">
        <Navbar />
        <div className="px-8 py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default Content;
