import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import TaggerBox from "components/tagger-box/tagger-box";
import TaggerRow from "components/tagger-row/tagger-row";

import {getTagEntries} from "lib/eh-tagger-api";

import "css/index.less";

function IndexMain():JSX.Element
{
  const [theEntries,setEntries]=useState<TagEntry[]>([]);
  const [theEditingEntry,setEditingEntry]=useState<TagEntry|null>(null);
  const [theEditorOpen,setEditorOpen]=useState<boolean>(false);

  /** initial load of entries */
  useEffect(()=>{
    (async ()=>{
      setEntries(await getTagEntries());
    })();
  },[]);

  /** load the tag editor with the specified entry. fails if the tag editor is already open.*/
  function editTags(entry:TagEntry):void
  {
    // if (theEditorOpen)
    // {
    //   return;
    // }

    setEditorOpen(true);
    setEditingEntry(entry);
  }

  /** render tagger rows from the array of tag entrys. */
  function renderTaggerRows(entries:TagEntry[]):JSX.Element[]
  {
    return _.map(entries,(x:TagEntry)=>{
      return <TaggerRow entry={x} key={x.data.link} onClick={editTags}/>;
    });
  }

  return <>
    <div className="tagger-rows">
      {renderTaggerRows(theEntries)}
    </div>

    <TaggerBox entry={theEditingEntry} showing={theEditorOpen}/>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;