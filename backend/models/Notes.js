import mongoose from "mongoose";
const notesSchema =mongoose.Schema(
    {
        title:{type :String, required:true},
        content:{type :String,required:true},
        status:{type :String,required:true}

    },
    {
        timestamps:true,
    }
);
const Notes =mongoose.model('Note', notesSchema);
export default Notes;