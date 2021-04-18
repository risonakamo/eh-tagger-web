import React,{useEffect} from "react";
import ReactDOM from "react-dom";

import TaggerBox from "components/tagger-box/tagger-box";

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
  useEffect(()=>{
    (async ()=>{
      console.log(await getTagEntries());
    })();
  },[]);

  return <>
    <div className="tagger-entries">
      <div className="tagger-entry">
        test entry 1
      </div>
      <div className="tagger-entry">
        test entry 2
      </div>

      <TaggerBox entry={exampleEntry} showing={false}/>
    </div>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;