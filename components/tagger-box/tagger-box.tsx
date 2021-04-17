import React,{useState,useEffect} from "react";
import _ from "lodash";

import Tag from "components/tag/tag";
import {tagListToTagSet} from "lib/tag-helpers";

import "./tagger-box.less";

interface TaggerBoxProps
{
  entry:TagEntry
}

export default function TaggerBox(props:TaggerBoxProps):JSX.Element
{
  const [theCurrentTags,setCurrentTags]=useState<TagSet>({});
  const [theNewTags,setNewTags]=useState<TagSet>({});

  /** on recieving new entry, set the current tags and new tags */
  useEffect(()=>{
    setCurrentTags(props.entry.tagData.tags);
    setNewTags(tagListToTagSet(props.entry.missingTags));
  },[props.entry]);

  /** create tag elements from tagset */
  function createTags(tagset:TagSet):JSX.Element[]
  {
    return _.map(tagset,(x:boolean,i:string)=>{
      return <Tag label={i} key={i} selected={x}/>;
    });
  }

  return <div className="tagger-box">
    <div className="title">
      the title
    </div>

    <div className="body">
      <div className="header">current tags</div>
      <div className="tags-select-zone">
        {createTags(theCurrentTags)}
      </div>

      <div className="spacer"></div>

      <div className="header new">new tags</div>
      <div className="tags-select-zone">
        {createTags(theNewTags)}
      </div>
    </div>

    <div className="footer">
      <div className="button-28">Save All</div>
      <div className="button-28">Save Current</div>
      <div className="button-28">Cancel</div>
    </div>
  </div>;
}