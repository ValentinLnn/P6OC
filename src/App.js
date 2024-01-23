import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import Error from "./pages/Error/Error";
import "./main.scss";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
