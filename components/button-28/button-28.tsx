import React from "react";

import "./button-28.less";

interface Button28Props
{
  text:string
}

export default function Button28(props:Button28Props):JSX.Element
{
  return <div className="button-28">{props.text}</div>;
}