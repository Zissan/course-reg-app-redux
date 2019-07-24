import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Course Registration App | React Redux</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" role="button">
          Learn more
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
