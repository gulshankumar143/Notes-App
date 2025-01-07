import React, {useState,useEffect} from 'react';
import Spinner from './Spinner';
// import { useState } from 'react'
import axios from 'axios';
import { FaNoteSticky } from 'react-icons/fa6';
import {MdEdit, MdDelete } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import DatesModal from '../modals/DatesModal.jsx';
import NotesModal from '../modals/NotesModal.jsx';
import '../Components css/NotesCard.css';
const NotesCard = () => {
    const [notes, setnotes]=useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] =useState(null);
    const [notesModal, setNotesModal] = useState(false);
    const [datesModal, setdatesModal] = useState(false);
    const API_url='http://localhost:5000/api/notes';
    const getNotes = async ()=>{
        setIsLoading(true);
        try {
            const response = await axios.get(API_url);
            setnotes(response.data.data);
        } catch (error) {
            console.error(error);
        }finally {
            setIsLoading(false);
        }

    }
    useEffect(() => {
        getNotes();
    }, []);
    const openNotesModal = (index) => {
        setSelectedIndex(index);
         setNotesModal(true);
    }
    const closeNotesModal=()=>{
        setSelectedIndex(null);
         setNotesModal(false);
    }
    const openDatesModal=(index)=>{
        setSelectedIndex(index);
         setdatesModal(true);
    }
    const closeDatesModal=()=>{
        setSelectedIndex(null);
         setdatesModal(false);
    }
    return (
    <div className='notes-card-container'>
        {isLoading ?(<Spinner/>):(
            
            <div className='notes-card-grid'>
                {notes.map((note,index)=>(
                    <div key={note._id} className='note-card'>
                        <div className="note-card-info">
                            <span className='note-card-label'>S.No :</span>{index+1}
                        </div>
                        <div className="note-card-info">
                            <span className='note-card-label'>Title :</span>{note.title}
                        </div>
                        <div className="note-card-info">
                            <span className='note-card-label'>Status :</span>{note.status}
                        </div>
                        <div className="note-card-info">
                            <span className='note-card-label'>Date :</span>{new Date(note.createdAt).toDateString()}
                        </div>
                        <div className="note-card-actions">
                            <FaNoteSticky className='note-action-icon' onClick={()=>openNotesModal(index)}/>
                                <Link to={`/notes/edit/${note._id}`}>
                                    <MdEdit className='note-action-icon edit-icon'/>

                                </Link>
                                <Link to={`/notes/delete/${note._id}`}>
                                    <MdDelete className='note-action-icon delete-icon'/>

                                </Link>
                    <CiCalendarDate className='note-action-icon date-icon'onClick={()=>openDatesModal(index)}/>
                        </div>
                        {notesModal && selectedIndex === index (
                            <NotesModal onClose={closeNotesModal} note={note}/>
                        )}
                        {datesModal && selectedIndex === index (
                            <DatesModal onClose={closeDatesModal} note={note}/>
                        )}
                    </div>

                ))}

        </div>
    )}
    </div>
    )
}

export default NotesCard