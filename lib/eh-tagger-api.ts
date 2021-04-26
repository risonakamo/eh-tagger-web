import _ from "lodash";

/** get all tag entries api */
export async function getTagEntries():Promise<TagEntries>
{
    return (await fetch("/get-tag-entries",{
        method:"GET"
    })).json();
}

/** send tag update request */
export async function updateTags(tagupdate:TagUpdate):Promise<void>
{
    if (!_.size(tagupdate.tags))
    {
        return;
    }

    await fetch("/update-tag",{
        method:"POST",
        body:JSON.stringify(tagupdate),
        headers:{
            "Content-Type":"application/json"
        }
    });
}