// !! CROSS LANGUAGE TYPES
// !! mirrors tag_types.rs

/** key: tag name, val: tag present or not */
type TagSet=Record<string,boolean>

/** data object representing a set of tags associated with a data entry */
interface TagData
{
    link:string // key to corresponding data entry
    tags:TagSet // the tags
}

/** represents a tag in a tag schema */
interface TagDescriptor
{
    name:string
    description:string
}

/** data object representing combined entry data and associated tag data. */
interface TagEntry
{
    data:EntryData
    tagData:TagData

    missingTags:string[]

    outdated:boolean
    numberOutdated:number
}

/** vector of TagEntries. could be replaced by a hashmap sometime. */
type TagEntries=TagEntry[]

/** request to update tags for a TagEntry */
interface TagUpdate
{
    link:string
    tags:TagSet
}