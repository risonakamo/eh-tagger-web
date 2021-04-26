/** get all tag entries api */
export async function getTagEntries():Promise<TagEntries>
{
    return (await fetch("/get-tag-entries",{
        method:"GET"
    })).json();
}

/** send tag update request */
export async function updateTag(tagupdate:TagUpdate):Promise<void>
{
    await fetch("/update-tag",{
        method:"POST",
        body:JSON.stringify(tagupdate),
        headers:{
            "Content-Type":"application/json"
        }
    });
}