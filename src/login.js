import fs from "fs";

function loginUser(name, email, password) {
    try {
        if (!fs.existsSync("todo.json")) {
            return "no users found";
        }

        let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

        let isUser = data.some((value) => {
            return (
                value.name === name &&
                value.email === email &&
                value.password === password
            );
        });

        if (isUser) {
            return "login successful";
        } else {
            return "invalid credentials";
        }

    } catch (error) {
        console.log(error);
        return "error";
    }
}

export default loginUser;