

import './ContactPreview.scss'
import { Link } from 'react-router-dom'

export function ContactPreview({contact }) {

    return (
        <Link to={'/contact/' + contact._id}>
        <div className="contact-preview">
        <img className="contact-pre-img" src={`https://robohash.org/${contact._id}`} alt="" />
            <span>{contact.name}</span>
        </div>
        </Link>

    )


}
