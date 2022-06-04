import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Searchpage from "./Pages/SearchPage/Searchpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
