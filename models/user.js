import mongoose  from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
   
},{timestamps:true});

export default mongoose.model('Candidate',UserSchema,'candidates')
