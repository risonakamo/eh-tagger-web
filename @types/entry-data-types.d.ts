type EntryType="NHENTAI"|"OTHER"|"SANKAKU"|"IMGUR"|"DLSITE"|"HITOMI"
    |"PIXIV"|"EXHENTAI"|"BETASANKAKU"

/** current interface for log entry data. */
interface EntryData
{
    date:Date
    group:string
    link:string
    name:string
    type:EntryType
}