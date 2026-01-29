import fs from "fs";

function createBook(bookId, title, author, price) {
    try {
        let books = [];
        let ob = { bookId, title, author, price };

        if (fs.existsSync("book.json")) {
            books = JSON.parse(fs.readFileSync("book.json", "utf-8"));
            let isBooks=data.some((value)=>value.bookId===bookId)
            if(isBooks){
                return "Book exit"
            }
            books=data;
        }

        books.push(ob);
        fs.writeFileSync("book.json", JSON.stringify(books, null, 2));

        return "book created";
    } 
    catch (error) {
        console.log(error);
    }
}

export default createBook;