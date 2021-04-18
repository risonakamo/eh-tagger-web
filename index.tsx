import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import TaggerBox from "components/tagger-box/tagger-box";
import TaggerRow from "components/tagger-row/tagger-row";

import {getTagEntries} from "lib/eh-tagger-api";

import "css/index.less";

const exampleEntry:TagEntry={
  data:{
    date:new Date(),
    group:"something",
    link:"asd",
    name:"test entry",
    type:"HITOMI"
  },
  tagData:{
    link:"asd",
    tags:{
      "tag1":true,
      "tag2":false,
      "tag3":false
    }
  },
  missingTags:[
    "tag4","tag5","tag6"
  ],
  outdated:true,
  numberOutdated:3
};

function IndexMain():JSX.Element
{
  const [theEntries,setEntries]=useState<TagEntry[]>([]);

  /** initial load of entries */
  useEffect(()=>{
    (async ()=>{
      setEntries(await getTagEntries());
    })();
  },[]);

  /** render tagger rows from the array of tag entrys. */
  function renderTaggerRows(entries:TagEntry[]):JSX.Element[]
  {
    return _.map(entries,(x:TagEntry)=>{
      return <TaggerRow entry={x} key={x.data.link}/>;
    });
  }

  return <>
    <div className="tagger-rows">
      {renderTaggerRows(theEntries)}
    </div>

    <TaggerBox entry={exampleEntry} showing={false}/>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;