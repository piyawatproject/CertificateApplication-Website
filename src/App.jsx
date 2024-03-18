import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

//Style
import "./App.css";

//Components
import CreateReport from "./Components/Pages/CreateReport/CreateReport";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Report from "./Components/Pages/Report/Report";
import Statistic from "./Components/Pages/Statistic/Statistic";
import MySidebar from "./Components/Sidebar/MySidebar";
const App = () => {
  return (
    <div>
      <Router>
        <MySidebar />
        <div className="main">
          <Routes>
            <Route path="/report" exact={true} component={Report} />
            <Route path="/createreport" exact={true} component={CreateReport} />
            <Route path="/statistic" exact={true} component={Statistic} />
            <Route path="/dashboard" exact={true} component={Dashboard} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
