import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    created_at: { type: Date, default: Date.now },
});
const book = mongoose.model('book', bookSchema);

export default book;