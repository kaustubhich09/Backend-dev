import fs from "fs"
function createTodo(name, task, status){
    try{
        let ob = {
            createtime:new Date(),
            task, status:false
        }
        if(fs.existsSync("todo.json")){
            let data = JSON.parse(fs.readFileSync("todo.json","utf-8"))
            for(let i =0; i<data.length;i++){
                if(data[i].name===name){
                    data[i].todo.push(ob)
                }
            }
            fs.writeFileSync("todo.json",JSON.stringify(data,))
        }
    }
    catch(error){
        console.log(error);
    }
}export default createTodo