import mongoose from 'mongoose';

const BorrowRecordSchema = new mongoose.Schema({
    books: [{ type: mongoose.Schema.ObjectId, ref: "book", required: true }],
    member_id: { type: mongoose.Schema.ObjectId, ref: "member", required: true },
    borrowed_at: {type: Date, default: date.now},
});
const BorrowRecord = mongoose.model('BorrowRecord', BorrowRecordSchema);

export default BorrowRecord;