import React from "react";

import "./tagger-row.less";

interface TaggerRowProps
{
  entry:TagEntry
  onClick?(entry:TagEntry):void //click callback provides this row's entry
}

export default function TaggerRow(props:TaggerRowProps):JSX.Element
{
  /** handle this row click. */
  function handleClick():void
  {
    props.onClick?.(props.entry);
  }

  return <div className="tagger-row" onClick={handleClick}>
    {props.entry.data.name}
  </div>;
}