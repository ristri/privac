import React from "react";
import AceEditor from "react-ace";
import LZString from "lz-string";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/mode/javascript";
import "brace/mode/html";
import "brace/mode/java";
import "brace/mode/golang";
import "brace/mode/text";
import "brace/theme/monokai";
import "./styles.css";
const modes = {
  t: "text",
  c: "c_cpp",
  p: "python",
  j: "java",
  e: "javascript",
  h: "html",
  g: "golang"
};
export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "", value: "", language: "text", font: 14 };
    this.generate = this.generate.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    var location = window.location.href;
    if (location.search("#") !== -1) {
      var data = location.replace("https://ristri.github.io/privac/#", "");
      console.log(window.location.hostname)
      this.changeValue(data.substring(2), data.substring(0, 1));
    }
  }
  changeValue(e, l) {
    this.setState({
      value: LZString.decompressFromEncodedURIComponent(e),
      language: modes[l]
    });
  }

  onChange(newValue) {
    this.setState({ value: newValue });
    this.generate();
  }
  onLanguageChange(e) {
    this.setState({ language: e.target.value });
  }
  onFontChange(e) {
    this.setState({font: e.target.value})
  }
  generate() {
    var cl;
    if (this.state.language !== "javascript")
      cl = this.state.language.substring(0, 1);
    else cl = "e";
    this.setState({
      url: LZString.compressToEncodedURIComponent(this.state.value)
    });
    window.location.href =
      "https://ristri.github.io/privac/#" + cl + "/" + this.state.url;
  }
  copyToClipboard = ()=>{
    navigator.clipboard.writeText(window.location)
  }
  render() {
    return (
      <div>
        <div className="box">
          <div className="columns">
            <div className="column">
              <span>Select Language:</span>
              <div class="select is-rounded">
                <select onChange={this.onLanguageChange} value={this.state.language}>
                  <option>text</option>
                  <option>c_cpp</option>
                  <option>python</option>
                  <option>java</option>
                  <option>javascript</option>
                  <option>html</option>
                  <option>golang</option>
                </select>
              </div>
            </div>
            <div className="column">
              <span>Font Size:</span>
              <input className="input is-rounded" onChange={this.onFontChange} value={this.state.font} type="number" />
            </div>
            <div className="column">
              <button onClick={this.copyToClipboard} class="button is-dark">Copy URL to Clipboard</button>
            </div>
            <div className="column"></div>
          </div>
          <AceEditor
            mode={this.state.language}
            theme="monokai"
            wrapEnabled={true}
            value={this.state.value}
            onChange={this.onChange}
            name="editor"
            width="auto"
            fontSize={this.state.font}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    );
  }
}
