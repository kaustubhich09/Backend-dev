import fs from "fs";

function deletetodo(name, task, status) {
    try {
        let ob = {
            createtime: new Date(),
            task,
            status: false
        };

        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    data[i].todo.push(ob);
                    data[i].todo.pop(); // delete last todo
                }
            }

            fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
            return "todo deleted";
        }
    } catch (error) {
        console.log(error);
        return "error";
    }
}

export default deletetodo;