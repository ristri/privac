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
    this.state = { url: "", value: "", language: "text" };
    this.generate = this.generate.bind(this);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    var location = window.location.href;
    if (location.search("#") !== -1) {
      var data = location.replace("https://privac.netlify.io#", "");
      this.changeLanguage(data.substring(0, 1));
      this.changeValue(data.substring(2));
    }
  }
  changeValue(e) {
    this.setState({ value: LZString.decompressFromEncodedURIComponent(e) });
  }
  changeLanguage(e) {
    this.setState({ langauge: modes[e] });
    console.log(modes[e]);
  }

  onChange(newValue) {
    this.setState({ value: newValue });
    this.generate();
  }
  onLanguageChange(e) {
    this.setState({ language: e.target.value });
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
      "https://privac.netlify.com/#" + cl + "/" + this.state.url;
  }
  render() {
    return (
      <div>
        <select onChange={this.onLanguageChange} value={this.state.language}>
          <option>text</option>
          <option>c_cpp</option>
          <option>python</option>
          <option>java</option>
          <option>javascript</option>
          <option>html</option>
          <option>golang</option>
        </select>
        <AceEditor
          mode={this.state.language}
          theme="monokai"
          wrapEnabled={true}
          value={this.state.value}
          onChange={this.onChange}
          name="editor"
          width="100vh"
          editorProps={{ $blockScrolling: true }}
        />
        <button onClick={this.generate}>Generate</button>
        <div>{this.state.url}</div>
      </div>
    );
  }
}
