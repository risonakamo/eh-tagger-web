import React,{useState,useEffect} from "react";
import _ from "lodash";
import cx from "classnames";

import Tag from "components/tag/tag";
import {tagListToTagSet} from "lib/tag-helpers";

import "./tagger-box.less";

interface TaggerBoxProps
{
  entry:TagEntry|null
  showing:boolean
}

export default function TaggerBox(props:TaggerBoxProps):JSX.Element
{
  const [theCurrentTags,setCurrentTags]=useState<TagSet>({});
  const [theNewTags,setNewTags]=useState<TagSet>({});

  /** on recieving new entry, set the current tags and new tags */
  useEffect(()=>{
    if (!props.entry)
    {
      setCurrentTags({});
      setNewTags({});
    }

    else
    {
      setCurrentTags(props.entry.tagData.tags);
      setNewTags(tagListToTagSet(props.entry.missingTags));
    }
  },[props.entry]);

  /** toggle a current tag */
  function toggleCurrentTag(tag:string):void
  {
    setCurrentTags({
      ...theCurrentTags,
      [tag]:!theCurrentTags[tag]
    });
  }

  /** toggle a new tag */
  function toggleNewTag(tag:string):void
  {
    setNewTags({
      ...theNewTags,
      [tag]:!theNewTags[tag]
    });
  }

  /** render tag elements from tagset */
  function renderTags(tagset:TagSet,newTags:boolean):JSX.Element[]
  {
    var toggleTagFunction:(tag:string)=>void;
    if (!newTags)
    {
      toggleTagFunction=toggleCurrentTag;
    }

    else
    {
      toggleTagFunction=toggleNewTag;
    }

    return _.map(tagset,(x:boolean,i:string)=>{
      return <Tag label={i} key={i} selected={x} onClick={toggleTagFunction}/>;
    });
  }

  /** element that displays when there are no tags for a section */
  function renderNoTags(tagset:TagSet):JSX.Element|null
  {
    if (!_.keys(tagset).length)
    {
      return <div className="no-tags">
        none
      </div>;
    }

    return null;
  }

  const classes={
    hidden:!props.showing
  };

  return <div className={cx("tagger-box",classes)}>
    <div className="title">
      {props.entry?.data.name || "unloaded"}
    </div>

    <div className="body">
      <div className="header">current tags</div>
      <div className="tags-select-zone">
        {renderTags(theCurrentTags,false)}
        {renderNoTags(theCurrentTags)}
      </div>

      <div className="spacer"></div>

      <div className="header new">new tags</div>
      <div className="tags-select-zone">
        {renderTags(theNewTags,true)}
        {renderNoTags(theNewTags)}
      </div>
    </div>

    <div className="footer">
      <div className="button-28">Save All</div>
      <div className="button-28">Save Current</div>
      <div className="button-28">Cancel</div>
    </div>
  </div>;
}