import React from 'react'
import { RxCrossCircled} from 'react-icons/rx'
import { CiCalendarDate } from 'react-icons/ci'

import '../modal css/DatesModal.css'
const DatesModal = ({onClose,note}) => {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event)=>event.stopPropagation()}>
                <RxCrossCircled className='modal-close-icon' onClick={onClose}/>
             <h4 className='modal-title'>{note.title}</h4>
             <div className="modal-date-info">
              <CiCalendarDate className='modal-date-icon'/>
              <h2>{new Date(note.createdAt).toDateString()}</h2>
             </div>
             <p>
              created at:
              <span className='date-details'>
              {new Date(note.createdAt).toDateString().slice(0,19).replace('T','')}
              </span>
             </p>
            </div>
        </div>
    )
}

export default DatesModal