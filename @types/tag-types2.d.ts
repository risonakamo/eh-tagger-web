// more tag types, but not mirrored into rust

/** tagset as a list, most likely sorted */
type TagSetArray=TagSetItem[]

/** itemised form of tag from TagSet into TagSetArray */
interface TagSetItem
{
    tag:string
    set:boolean
}