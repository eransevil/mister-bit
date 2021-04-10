
import { Component } from 'react'
import { connect } from 'react-redux'
import {contactService} from '../..//services/contactService.js'
import { Link } from 'react-router-dom';
import {saveContact} from '../../store/actions/contactActions'
import './ContactEditPage.scss'

export class _ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
            
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone, _id } = this.state.contact
        return (
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                  <div className="actions">
                    <Link className="link-btn" to={'/contact/'}>⏮</Link>
                    {_id && <Link className="link-btn"  to={'/contact/edit/' + _id}>📝</Link> } 
                </div>
                { _id && <img className="img-edit" src={`https://robohash.org/${_id}`} alt="" /> }
                <div className="input-container" > 
                <label htmlFor="name">Name</label>
                <input placeholder="Name" required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                </div>
                <div className="input-container">
                <label htmlFor="email">Email</label>
                <input  placeholder="Email" required type="text" id="email" value={email} onChange={this.handleChange} name="email" />
                </div>
                <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input placeholder="Phone" required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />
                </div>
                <div className="save-edit-btn-container">
                <p>{this.state.errMsg}</p>
                <button className="save-edit-btn">Save Contact</button>
                </div>
            </form>
        )
    }
}


const mapDispatchToProps = {
    saveContact
}

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage)
