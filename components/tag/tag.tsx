import React from "react";
import cx from "classnames";

import "./tag.less";

interface TagProps
{
  label:string
  selected:boolean
}

export default function Tag(props:TagProps):JSX.Element
{
  const classes={
    selected:props.selected
  };

  return <div className={cx("tag",classes)}>
    <p className="label">{props.label}</p>
  </div>;
}