import _ from "lodash";

/** create a default TagSet from a list of tags */
export function tagListToTagSet(tags:string[]):TagSet
{
    return _.reduce(tags,(r:TagSet,x:string)=>{
        r[x]=false;
        return r;
    },{});
}

/** convert TagSet to sorted TagSetArray. maybe in the future add options to choose the
 *  sort type? */
export function tagSetToTagSetArray(tagset:TagSet):TagSetArray
{
    var tagslist:TagSetArray=_.map(tagset,(x:boolean,i:string)=>{
        return {
            tag:i,
            set:x
        };
    });

    return _.sortBy(tagslist,(x:TagSetItem)=>{
        return x.tag;
    });
}