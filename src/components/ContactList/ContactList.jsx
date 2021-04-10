
import React from 'react'
import {ContactPreview} from '../ContactPreview/ContactPreview.jsx'

import './ContactList.scss'


export default function ContactList({contacts}) {
    return (
        <div className="contact-list">
           <ul >
               { contacts &&  contacts.map(contact => <ContactPreview  key={contact._id} contact={contact} />)}
            </ul> 
        </div>
    )
}
