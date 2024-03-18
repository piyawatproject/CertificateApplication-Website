import React from "react";
import { Link } from "react-router-dom";

//Style
import "./Sidebar.css";

const MySidebar = () => {
  return (
    <div className="sidenav">
      <div className="header-button"></div>
      <img
        src="https://gable-prod.s3.ap-southeast-1.amazonaws.com/logo_2e12331ff9_d9108c05a3.svg"
        alt="Logo"
        className="logo"
      />
      <ul>
        <li>
          <Link to="/mycertificates">My Certificates</Link>
        </li>
        <li>
          <Link to="/createreport">Create Report</Link>
        </li>
        <li>
          <Link to="/managecertificates">Manage Certificates</Link>
        </li>
        <li>
          <Link to="/approvecertificate">Approve Certificate</Link>
        </li>
        <li>
          <Link to="/approveincentive">Approve Incentive</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
        <li>
          <Link to="/importdata">Import Data</Link>
        </li>
      </ul>
    </div>
  );
};

export default MySidebar;
