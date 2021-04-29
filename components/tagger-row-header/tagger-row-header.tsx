import React from "react";

import "./tagger-row-header.less";

export default function TaggerRowHeader():JSX.Element
{
  return <div className="tagger-row-header">
    <div className="icon"></div>
    <div className="header-row name">name</div>
    <div className="header-row tags">tags</div>
  </div>;
}