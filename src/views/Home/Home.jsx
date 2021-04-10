
import { Component } from 'react'
import { MoveList } from '../../components/MoveList/MoveList';
import userService from '../../services/userService';
import { connect } from 'react-redux'
import {setUser} from '../../store/actions/userActions'

import './Home.scss'

export class _Home extends Component {

    state = {
        contactMoves :null
    }

    componentDidMount() {
        const contactMoves = userService.getUserMoves()
        this.setState({contactMoves})
        this.getLoggedInUser()
    }
    
    getLoggedInUser = () => {
         this.props.setUser()
    
      }

    render() {
        const {contactMoves} =  this.state
        const { user} = this.props

        return (
            <div>
                <div className="bit-info">
                <span className="username-title"> Hello {user && user.username} !</span>
                <span className="user-info"> 💰 Coins: {user && user.coins} </span>
                {/* <span className="user-info"> 💹 BTC : {bitRate && bitRate} </span> */}
                </div>

                {contactMoves && <MoveList  title={'Your last 3 moves:'} Moves={contactMoves}/>  } 

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
    }
  }
  
  const mapDispatchToProps = {
    setUser
  }

  export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)