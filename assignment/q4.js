//Build a simple TODO API with endpoints for creating, reading, updating, and deleting tasks.
//Store tasks in memory.

const fs=require('fs');
function create1(params) {
    fs.writeFileSync("first2.txt"," My name is kaustubhi chauhan ");
    return
}

function read1(params) {
    const res=fs.readFileSync("first2.txt","utf-8");
    return res;

}
function update1(params) {
    const res=fs.appendFileSync("first2.txt","Currently i am pursuing b tech from gla ")
    return res;
    
}
function delete1(params) {
    fs.unlinkSync("first2.txt");
}
create1();
console.log(update1());

console.log(read1());