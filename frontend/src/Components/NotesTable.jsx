import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import '../Components css/NotesCard.css';

const NotesTable = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_url = 'http://localhost:5000/api/notes';

    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(API_url);
                setNotes(response.data.data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNotes();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className='notes-table-container'>
            <table className='notes-table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index) => (
                        <tr key={note._id}>
                            <td>{index + 1}</td>
                            <td>{note.title}</td>
                            <td>{note.status}</td>
                            <td>{new Date(note.createdAt).toDateString()}</td>
                            <td>
                                <Link to={`/notes/edit/${note._id}`}>Edit</Link>
                                {' | '}
                                <Link to={`/notes/delete/${note._id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotesTable;