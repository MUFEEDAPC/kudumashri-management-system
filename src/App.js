import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Error from "./Components/404Error/404Error";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "../src/Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
