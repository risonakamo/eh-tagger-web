import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import TaggerBox from "components/tagger-box/tagger-box";
import TaggerRow from "components/tagger-row/tagger-row";

import {getTagEntries,updateTags} from "lib/eh-tagger-api";

import "css/index.less";

function IndexMain():JSX.Element
{
  const [theEntries,setEntries]=useState<TagEntry[]>([]);
  const [theEditingEntry,setEditingEntry]=useState<TagEntry|null>(null);
  const [theEditorOpen,setEditorOpen]=useState<boolean>(false);

  /** initial load of entries */
  useEffect(()=>{
    refreshEntries();
  },[]);

  /** load the tag editor with the specified entry. */
  function editTags(entry:TagEntry):void
  {
    // if (theEditorOpen)
    // {
    //   return;
    // }

    setEditorOpen(true);
    setEditingEntry(entry);
  }

  /** close the tag editor */
  function closeEditor():void
  {
    setEditorOpen(false);
  }

  /** send tag update, close editor, and refresh the list */
  async function saveTagsAndClose(tagupdate:TagUpdate):Promise<void>
  {
    closeEditor();
    await updateTags(tagupdate);
    refreshEntries();
  }

  /** refresh entries from api */
  async function refreshEntries():Promise<void>
  {
    setEntries(await getTagEntries());
  }

  /** render tagger rows from the array of tag entrys. */
  function renderTaggerRows(entries:TagEntry[]):JSX.Element[]
  {
    return _.map(entries,(x:TagEntry)=>{
      return <TaggerRow entry={x} key={x.data.link} onTagsClick={editTags}/>;
    });
  }

  return <>
    <div className="header">
      <div className="tagger-row-header">
        <div className="icon"></div>
        <div className="name">name</div>
        <div className="tags">tags</div>
      </div>
    </div>

    <div className="tagger-rows">
      {renderTaggerRows(theEntries)}
    </div>

    <TaggerBox entry={theEditingEntry} showing={theEditorOpen} onCancel={closeEditor}
      onSubmit={saveTagsAndClose}/>
  </>;
}

function main()
{
  ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

window.onload=main;