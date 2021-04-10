
import { Component } from 'react'
import {Transfer} from '../../store/actions/userActions.js'
import './TransferFunde.scss'
import { connect } from 'react-redux'

export class _TransferFunde extends Component {

    state = {
        amount: '',
    }

    handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        const amount = value;
        this.setState({ amount })
    }

    onTransfer = async (ev) => {
        ev.preventDefault()
        const amount = this.state.amount
        await this.props.Transfer({ contact:this.props.contact ,amount })
        // this.props.history.push('/contact')
    }


    render() {
        const { amount } = this.state
        return (
            <div className="transfer-found">
                <form className='transfer-form' onSubmit={this.onTransfer}>
                    <span>Transfer coins to {this.props.contact.name}</span>
                    <div className="inner-form">
                        <label className="labal-amount" htmlFor="amount">Amount:</label>
                        <input  required type="number" id="amount" value={amount} onChange={this.handleChange} name="amount" />
                        <button className="transfer-btn">Transfer</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    Transfer
}

export const TransferFunde = connect(null, mapDispatchToProps)(_TransferFunde)
