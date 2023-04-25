import mongoose from 'mongoose';

const schema = mongoose.Schema({
    email: { type: String, unique: true }, // Set unique property to true for email field
    password: { type: String }
});

const model = mongoose.model('users', schema);
export default model;
