import _ from "lodash";

/** create a default TagSet from a list of tags */
export function tagListToTagSet(tags:string[]):TagSet
{
    return _.reduce(tags,(r:TagSet,x:string)=>{
        r[x]=false;
        return r;
    },{});
}