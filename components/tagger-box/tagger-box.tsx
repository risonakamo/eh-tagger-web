import React,{useState,useEffect} from "react";
import _ from "lodash";
import cx from "classnames";
import {Rnd} from "react-rnd";

import Tag from "components/tag/tag";
import Button28 from "components/button-28/button-28";

import {tagListToTagSet,tagSetToTagSetArray} from "lib/tag-helpers";

import "./tagger-box.less";

interface TaggerBoxProps
{
  entry:TagEntry|null
  showing:boolean

  onCancel?():void //cancel button function
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

  /* -- RENDER -- */
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

    var taglist:TagSetArray=tagSetToTagSetArray(tagset);

    return _.map(taglist,(x:TagSetItem)=>{
      return <Tag label={x.tag} key={x.tag} selected={x.set} onClick={toggleTagFunction}/>;
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

  const currentTagsText:string=`current tags (${_.size(theCurrentTags)})`;
  const newTagsText:string=`new tags (${_.size(theNewTags)})`;

  const rndDefault={
    // todo: fix this
    x:window.innerWidth*.25,
    y:window.innerHeight*.05,
    width:500,
    height:600
  };

  const rndStyle={
    display:"flex"
  };

  return <Rnd default={rndDefault} className={cx("tagger-box",classes)} dragHandleClassName="title"
    style={rndStyle} minWidth={500} minHeight={300} bounds={"window"}
  >
    <div className="title">
      {props.entry?.data.name || "unloaded"}
    </div>

    <div className="body">
      <div className="header">{currentTagsText}</div>
      <div className="tags-select-zone">
        {renderTags(theCurrentTags,false)}
        {renderNoTags(theCurrentTags)}
      </div>

      <div className="spacer"></div>

      <div className="header new">{newTagsText}</div>
      <div className="tags-select-zone">
        {renderTags(theNewTags,true)}
        {renderNoTags(theNewTags)}
      </div>
    </div>

    <div className="footer">
      <Button28 text="Save All"/>
      <Button28 text="Save Current"/>
      <Button28 text="Cancel" onClick={props.onCancel}/>
    </div>
  </Rnd>;
}