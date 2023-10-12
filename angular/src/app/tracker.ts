import { userleads } from "./users";

export class tracker{
    loggedin_person:string|undefined;
    lrole:string|undefined
    lid:number|undefined
    lcid:number|undefined;
    lcname:string|undefined 
    lteam:string|undefined 
    lteamid:number|undefined
    lname:string|undefined
    ldatabase:string|undefined;
    ladminname:string|undefined
    lmembers:string[]|undefined
    lmemberid:number|undefined
    industry:string|undefined
    useleads:userleads|undefined
    lsalespersonid:number|undefined
    leadadminid:number|undefined
    leadadminname:string|undefined
    teammembername:string|undefined
    filesave:File|undefined
}