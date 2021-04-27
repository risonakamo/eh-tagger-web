import React from "react";
import _ from "lodash";

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

  // TODO: make this actually something
  function renderTagsString():string
  {
    return _.keys(props.entry.tagData.tags).join(", ");
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
      {renderTagsString()}
    </div>
  </div>;
}