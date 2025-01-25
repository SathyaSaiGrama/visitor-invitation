import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import ErrorComponent from "./components/ErrorComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/error" element={<ErrorComponent />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
