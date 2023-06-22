import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Error from "./Components/404Error/404Error";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "../src/Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Create from "./Components/kudumpashri/create/Create";
import AllList from "./Components/kudumpashri/allList/AllList";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Create" element={<Create/>}></Route>
        <Route path="/AllList" element={<AllList />}></Route>

      </Routes>
    </div>
  );
}

export default App;
