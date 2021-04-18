/** get all tag entries api */
export async function getTagEntries():Promise<TagEntries>
{
    return (await fetch("/get-tag-entries",{
        method:"GET"
    })).json();
}