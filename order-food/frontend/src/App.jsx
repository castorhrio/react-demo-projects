import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="success" element={<Success />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
