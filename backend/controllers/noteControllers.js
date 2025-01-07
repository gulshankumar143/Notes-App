import Note from '../models/Notes.js';
//create a new note
export const createNote = async (req,res) =>{
    const{title,content,status}=req.body;
    if(!title || !content || !status){
        return res.status(400).json({message: 'all fields are required'})
    }
    const newNote = new Note({
        title,
        content,
        status
    });

  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);     
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
//get all notes
export const getNotes = async (req,res) =>{
    try {

        const notes = await Note.find();
        res.status(200).json({
            count:notes.length,
            data:notes});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
//update a note
export const updateNote = async(req,res) =>{
    const {id} = req.params;
    const {title,content,status} =req.body;
    if(!title || !content || !status)
    {
        return res.status(400).json({message: 'all fields are required'});
    }
    try {
        const updateNote = await Note.findByIdAndUpdate(
            id,
            {title,content,status},
            {new:true}
        )
        if(!updateNote){
            return res.status(404).json({message: 'failed to update note'});
        }
        res.status(200).json(updateNote);
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
//delete a note
export const deleteNote = async(req,res) =>{
    const {id} = req.params;
    try {
        const deleteNote = await Note.findByIdAndDelete(id);
        if(!deleteNote){
            return res.status(404).json({message: 'failed to delete note'});
        }
        res.status(200).json({message: 'note deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
//Get a single note by ID

export const getNoteById = async(req,res) =>{
    const {id} = req.params;
    try {
        const note = await Note.findById(id);
        if(!note){
            return res.status(404).json({message: 'could note found note'});
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}