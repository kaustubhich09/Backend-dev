
import fs from "fs";

function registerUser(name,email,password){
    try{
        let user=[];
        let obj={
           
            name,
            email,
            password,
            todo:[]
        }
        if(fs.existsSync("todo.json")){
           let data=JSON.parse(FileSystem.readFileSync("todo.json","utf-8"))
           let isUser=data.some((value)=>value.name==name)
           if(isUser){
            return "user exit"
           }
           user =data;

        }
        user.push(obj)
        fs.writeFileSync("todo.json",JSON.stringify(user,null,2))
        console.log("user create");
    }
    catch(error){
        console.log(error);
    }

}export default registerUser