import React from "react";

import "./button-28.less";

interface Button28Props
{
  text:string
  onClick?():void
}

export default function Button28(props:Button28Props):JSX.Element
{
  return <div className="button-28" onClick={props.onClick}>{props.text}</div>;
}