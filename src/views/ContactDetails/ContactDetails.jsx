
import { Component } from 'react'
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { MoveList } from '../../components/MoveList/MoveList';
import {TransferFunde} from '../../components/TransferFunde'
import userService from '../../services/userService';
import {getContactById ,removeContact} from '../../store/actions/contactActions'
import './ContactDetails.scss'
import backIcon from '../../assets/imgs/back-icon.jfif'
import deleteIcon from '../../assets/imgs/delete-icon.png'
import editIcon from '../../assets/imgs/edit-icon.png'

export class _ContactDetails extends Component {

    state = {
        contactMoves :null
    }

     componentDidMount() {
         this.props.getContactById(this.props.match.params.id)
        const contactMoves =  userService.getContactMoves(this.props.match.params.id)
        this.setState({contactMoves})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }

    componentWillUnmount() {
        this.state.contactMoves = null;
      }

        onRemoveContact = async () => {
        await this.props.removeContact(this.props.contact._id)
        this.onBack()
    }

    onBack = () => {
        this.props.history.goBack()
        // this.props.history.push('/')
    }
    render() {
        const { contact } = this.props
        const {contactMoves} =  this.state
        if (!contact) return <div>Loading contact.....</div>
        return (
            <div className="contact-details">
                <div className="actions">
                    <Link className="link-btn" to={'/contact/'}><img src={backIcon}/></Link>
                    <div className="delete-btn" onClick={this.onRemoveContact}><img src={deleteIcon} alt=""/></div>
                    <Link className="link-btn"  to={'/contact/edit/' + contact._id}><img src={editIcon}/></Link>
                </div>
                <div className="contact-info"> 
                <img className="contact-details-img" src={`https://robohash.org/${contact._id}`} alt="" />
                <span> Name: {contact.name}</span>
                <span> Email: {contact.email}</span>
                <span>Phone: {contact.phone}</span>
                </div>

                <TransferFunde contact={contact}/>
                {contactMoves && <MoveList  title={'Your Moves'} Moves={contactMoves}/>  } 

            </div>
        )
    }
}

const mapStateToProps = state => ({
    contact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getContactById,
    removeContact
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)
