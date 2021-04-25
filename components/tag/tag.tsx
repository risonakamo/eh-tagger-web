import React from "react";
import cx from "classnames";

import "./tag.less";

interface TagProps
{
  label:string
  selected:boolean
  onClick?(label:string):void // click handler provides label
}

export default function Tag(props:TagProps):JSX.Element
{
  /** handle click. */
  function clickHandler():void
  {
    props.onClick?.(props.label);
  }

  const classes={
    selected:props.selected
  };

  return <div className={cx("tag",classes)} onClick={clickHandler} title={props.label}>
    <p className="label">{props.label}</p>
  </div>;
}