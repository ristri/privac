(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{18:function(e,a,t){},26:function(e,a,t){e.exports=t(53)},53:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(3),o=t(5),c=t(4),s=t(0),i=t.n(s),r=t(23),u=t.n(r),m=(t(13),t(1)),h=t(24),d=t.n(h),g=t(11),v=t.n(g),p=(t(38),t(39),t(40),t(41),t(44),t(45),t(46),t(47),t(18),{t:"text",c:"c_cpp",p:"python",j:"java",e:"javascript",h:"html",g:"golang"}),b=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).copyToClipboard=function(){navigator.clipboard.writeText(window.location)},l.state={url:"",value:"",language:"text",font:14},l.generate=l.generate.bind(Object(m.a)(l)),l.onLanguageChange=l.onLanguageChange.bind(Object(m.a)(l)),l.onChange=l.onChange.bind(Object(m.a)(l)),l.changeValue=l.changeValue.bind(Object(m.a)(l)),l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href;if(-1!==e.search("#")){var a=e.replace("https://ristri.github.io/privac/#","");console.log(window.location.hostname),this.changeValue(a.substring(2),a.substring(0,1))}}},{key:"changeValue",value:function(e,a){this.setState({value:v.a.decompressFromEncodedURIComponent(e),language:p[a]})}},{key:"onChange",value:function(e){this.setState({value:e}),this.generate()}},{key:"onLanguageChange",value:function(e){this.setState({language:e.target.value})}},{key:"onFontChange",value:function(e){this.setState({font:e.target.value})}},{key:"generate",value:function(){var e;e="javascript"!==this.state.language?this.state.language.substring(0,1):"e",this.setState({url:v.a.compressToEncodedURIComponent(this.state.value)}),window.location.href="https://ristri.github.io/privac/#"+e+"/"+this.state.url}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column"},i.a.createElement("span",null,"Select Language:"),i.a.createElement("div",{class:"select is-rounded"},i.a.createElement("select",{onChange:this.onLanguageChange,value:this.state.language},i.a.createElement("option",null,"text"),i.a.createElement("option",null,"c_cpp"),i.a.createElement("option",null,"python"),i.a.createElement("option",null,"java"),i.a.createElement("option",null,"javascript"),i.a.createElement("option",null,"html"),i.a.createElement("option",null,"golang")))),i.a.createElement("div",{className:"column"},i.a.createElement("span",null,"Font Size:"),i.a.createElement("input",{className:"input is-rounded",onChange:this.onFontChange,value:this.state.font,type:"number"})),i.a.createElement("div",{className:"column"},i.a.createElement("button",{onClick:this.copyToClipboard,class:"button is-dark"},"Copy URL to Clipboard")),i.a.createElement("div",{className:"column"})),i.a.createElement(d.a,{mode:this.state.language,theme:"monokai",wrapEnabled:!0,value:this.state.value,onChange:this.onChange,name:"editor",width:"auto",fontSize:this.state.font,editorProps:{$blockScrolling:!0}})))}}]),t}(i.a.Component),E=t(25),f=t.n(E),C=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={showQR:!1},l.handleQR=l.handleQR.bind(Object(m.a)(l)),l}return Object(l.a)(t,[{key:"handleQR",value:function(){this.setState({showQR:!this.state.showQR})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{class:"button ",onClick:this.handleQR},"Generate QR "),i.a.createElement("div",{className:this.state.showQR?"modal is-active":"modal"},i.a.createElement("div",{className:"modal-background"}),i.a.createElement("div",{className:"modal-content"},i.a.createElement(f.a,{value:window.location.href,size:256})),i.a.createElement("button",{onClick:this.handleQR,className:"modal-close is-large","aria-label":"close"})))}}]),t}(i.a.Component),j=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("section",{className:"hero is-dark"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"Privac"),i.a.createElement("h2",{className:"subtitle"},"Code Sharing")))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-two-thirds"},i.a.createElement(b,null)),i.a.createElement("div",{className:"column"},i.a.createElement(C,null))))))}}]),t}(i.a.Component),w=document.getElementById("root");u.a.render(i.a.createElement(j,null),w)}},[[26,1,2]]]);
//# sourceMappingURL=main.74c4e253.chunk.js.map