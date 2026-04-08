import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    name: String,
    membershipType: {type: String, enum: ['Normal', 'Gold'], default: 'Normal'}
});
const member = mongoose.model('member', memberSchema);

export default member;