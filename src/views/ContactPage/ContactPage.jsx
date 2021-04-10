import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import ContactList from '../../components/ContactList/ContactList.jsx'
import ContactFilter from '../../components/ContactFilter/ContactFilter.jsx'
import { loadContacts } from '../../store/actions/contactActions'
import plusIcon from '../../assets/imgs/plus-btn.jfif'



import './ContactPage.scss'

class _ContactPage extends Component {

  state = {
    filterBy: {
      term: null
    },
  }

  componentDidMount() {
    this.props.loadContacts(this.props.filterBy)
  }

  onChangeFilter  = async  (filterBy) => {
    console.log(filterBy)
    this.setState({ filterBy }, await this.props.loadContacts(filterBy))
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return <h1> SHABAT SHALOM </h1>
    return (
      contacts && <div className="contact-container">
        {<ContactFilter match={this.props.match} onChangeFilter={this.onChangeFilter} />}
        <Link className="plus-btn" to="/contact/edit"><img src={plusIcon}/> </Link>
        {<ContactList contacts={contacts} />}
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    contacts: state.contactReducer.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)