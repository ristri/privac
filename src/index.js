import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import { Editor } from "./Editor";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Privac</h1>
              <h2 className="subtitle">Primary subtitle</h2>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds">
                <Editor />
              </div>
              <div className="column">vb</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
