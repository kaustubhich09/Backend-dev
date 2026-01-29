import fs from "fs";

function createmember(memberId, name, membershipType) {
    try {
        let member = [];
        let ob = { memberId, name, membershipType };

        if (fs.existsSync("member.json")) {
            member = JSON.parse(fs.readFileSync("member.json", "utf-8"));
            let ismember=data.some((value)=>value.memberId===memberId)
            if(ismember){
                return "member exit"
            }
            member=data;
        }

        member.push(ob);
        fs.writeFileSync("member.json", JSON.stringify(member, null, 2));

        return "member created";
    } 
    catch (error) {
        console.log(error);
    }
}

export default createmember;