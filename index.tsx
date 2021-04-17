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
      <div className="title">
        the title
      </div>

      <div className="body">
        <div className="header">current tags</div>
        <div className="tags-select-zone">
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="header new">new tags</div>
        <div className="tags-select-zone">
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
          <div className="tag">
            <p className="label">something</p>
          </div>
          <div className="tag selected">
            <p className="label">something</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="button-28">Save All</div>
        <div className="button-28">Save Current</div>
        <div className="button-28">Cancel</div>
      </div>
    </div>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;