import React from "react";

import "./tagger-row.less";

interface TaggerRowProps
{
  entry:TagEntry
  onTagsClick?(entry:TagEntry):void
}

export default function TaggerRow(props:TaggerRowProps):JSX.Element
{
  /** handle clicking on the tag part of the row. */
  function handleTagsClick():void
  {
    props.onTagsClick?.(props.entry);
  }

  var tagsMissingText:string|number="";
  if (props.entry.outdated)
  {
    tagsMissingText=props.entry.numberOutdated;
  }

  return <div className="tagger-row">
    <div className="icons" onClick={handleTagsClick}>
      {tagsMissingText}
    </div>

    <a className="name" href={props.entry.data.link} title={props.entry.data.link} target="_blank">
      {props.entry.data.name}
    </a>

    <div className="tags" onClick={handleTagsClick}>

    </div>
  </div>;
}