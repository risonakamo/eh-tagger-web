import React from "react";
import ReactDOM from "react-dom";

import "css/index.less";

function IndexMain():JSX.Element
{
  return <>
    <div className="tagger-entries">
      <div className="tagger-entry">
        test entry 1
      </div>
      <div className="tagger-entry">
        test entry 2
      </div>
    </div>

    <div className="tagger-box">

    </div>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;