
import React from 'react'
import { useState } from 'react'
import {FaSquarePlus} from 'react-icons/fa6';
import {Link} from 'react-router-dom'
import NotesTable from './NotesTable'
import NotesCard from './NotesCard'
import '../Components css/Heading.css'
const Heading = () => {
    const [tableNotes,setTableNotes] =useState(false);
    const [cardNotes,setCardNotes] =useState(false);
    return (
<div className="heading-container">
    <h2 className='heading-title'>Advanced Note taking application</h2>
    <div className="button-container">
    <div className="button-group">
        <button
        className='toggle-button'
        oneClick={()=>{
            setTableNotes(true);
            setCardNotes(false);
        }}
        >
            Table
        </button>
        <button
        className='toggle-button'
        oneClick={()=>{
            setTableNotes(false);
            setCardNotes(true);
        }}
        >
            Cards
        </button>
    </div>
    </div>
    <div className="add-note-icon">
        <Link to='/notes/create'>
        <FaSquarePlus className='icon' />
        </Link>
        
    </div>
    {tableNotes ?<NotesTable/> : <NotesCard/>}
</div>

    )
}

export default Heading