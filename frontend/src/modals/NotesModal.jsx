import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import '../modal css/DatesModal.css';

const NotesModal = ({ onClose, note }) => {
    if (!note) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <RxCrossCircled className='modal-close-icon' onClick={onClose} />
                <h4 className='modal-title'>{note.title}</h4>
                <p className='modal-status'>Status: {note.status}</p>
                <p className='modal-content-text'>{note.content}</p>
                <div className="modal-date-info">
                    <span>Created:</span>
                    <strong>{new Date(note.createdAt).toDateString()}</strong>
                </div>
            </div>
        </div>
    );
};

export default NotesModal