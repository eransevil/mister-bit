
import { Component } from 'react'
import utilService from '../../services/util.service.js'
import {SignUp} from '../../store/actions/userActions.js'
import { connect } from 'react-redux'
import bitcoin from '../../assets/imgs/bitcoin.jpg'


import './SignupPage.scss'

export class _SignupPage extends Component {

    state = {
            username: '',
    }


    handleChange = ({ target }) => {
        // const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        // this.setState((prevState) => ({ username: { ...prevState.username, [field]: value } }))
        // const prevState = this.state.username
        const username = value;
        this.setState({ username })
    }

    onSignUp = async (ev) => {
        ev.preventDefault()
        const username = this.state.username
        await this.props.SignUp({ username })
        this.props.history.push('/contact')
    }


    render() {
        const { username } = this.state

        return (
            <div>
            <form className='signup-form' onSubmit={this.onSignUp}>
            <img className="bitcoin-img" src={bitcoin}/>
            <label htmlFor="username">Enter your name</label>
                <input  placeholder="username" required type="text" id="username" value={username} onChange={this.handleChange} name="username" />
                <button className="signup-btn">SignUp</button>
            </form>
        
            </div>
        )
    }
}


const mapDispatchToProps = {
    SignUp
}

export const SignupPage = connect(null, mapDispatchToProps)(_SignupPage)
