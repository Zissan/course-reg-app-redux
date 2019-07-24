import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="display-4">Course Administration</h1>
    <p className="lead">
      React, Redux and React Router for ultra-responsive web apps.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
