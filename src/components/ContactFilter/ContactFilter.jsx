
import { Component } from 'react'

import './ContactFilter.scss'

export default class ContactFilter extends Component {

    state = {
            term:''
        
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const {term} = this.state
        return (
            <div>
                <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label className="labal" htmlFor="name">Name</label>
                <input placeholder="Contact Name" type="text" id="name" name="term" value={term} onChange={this.handleChange} />
                <label className="labal"  htmlFor="phone">Phone</label>
                <input placeholder="Contact Name" type="text" id="phone" name="term" value={term} onChange={this.handleChange} />
                </form>

            </div>
        )
    }
}
