import React from "react";

import "./tagger-row.less";

interface TaggerRowProps
{
  entry:TagEntry
}

export default function TaggerRow(props:TaggerRowProps):JSX.Element
{
  return <div className="tagger-row">
    {props.entry.data.name}
  </div>;
}