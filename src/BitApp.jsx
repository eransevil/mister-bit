import './App.css';
import { Component } from 'react'
import { ContactPage } from './views/ContactPage/ContactPage.jsx'
import { StatisticPage } from './views/StatisticPage/StatisticPage.jsx'
import {Home} from './views/Home/Home.jsx'
import {SignupPage} from './views/SignupPage/SignupPage.jsx'
import {ContactEditPage} from './views/ContactEditPage/ContactEditPage.jsx'
import userService from './services/userService.js'
import bitcoinService from './services/bitcoinService.js'
import { HashRouter as Router, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { ContactDetails } from './views/ContactDetails/ContactDetails';
import { loadContacts } from './store/actions/contactActions'
import {setUser} from './store/actions/userActions'
import { connect } from 'react-redux'


 class _BitApp extends Component {

  state = {
    // user: null,
    bitRate: null,
  }

  componentDidMount() {
    this.props.loadContacts()
    this.getLoggedInUser()
    this.getCurrBitRate()
    

  }
  getLoggedInUser = () => {
    // const user = userService.getLoggedInUser()
    // this.setState({ user })
     this.props.setUser()

  }
  async getCurrBitRate() {
    var bitRate = await bitcoinService.getRate()
    // const getMarketPrice = await bitcoinService.getMarketPrice()  
    bitRate =1/bitRate
    bitRate = +bitRate.toFixed(0)
    bitRate = bitRate.toLocaleString('en-IN')
    this.setState({ bitRate })
  }


  
  render() {
    const PrivateRoute = (props) => {
    return props.loggedInUser ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
    }
    const { bitRate } = this.state
    const { user} = this.props
    return (
      <Router>

        <div className="bit-app">
      
          <header className="App-header">
            <div className="nav-links"> 
        <NavLink className="nav-link-item"  exact to="/" activeClassName="active-nav">Home</NavLink>
        <NavLink className="nav-link-item"  exact to="/contact" activeClassName="active-nav">Contact</NavLink>
        <NavLink className="nav-link-item" exact to="/chrat" activeClassName="active-nav">Chrat</NavLink>
        <NavLink className="signup-link nav-link-item" exact to="/signup" activeClassName="active-nav">Signup</NavLink>
        </div>
         <span className="user-info"> Hello {user && user.username} </span>
            <span className="user-info"> 💰 {user && user.coins} </span>
            <span className="user-info"> 💹 BTC : {bitRate && bitRate} </span>
          </header>
          <Switch>
            <Route exact component={Home} path='/' />
            <PrivateRoute component={ContactEditPage} loggedInUser={user} path='/contact/edit/:id?' />
            <PrivateRoute component={StatisticPage} loggedInUser={user} path='/chrat' />
            <PrivateRoute component={ContactDetails} loggedInUser={user} path='/contact/:id' />
            <Route component={ContactPage} path='/contact' />
          <Route component={SignupPage} path='/signup' />
          </Switch>
        </div>
      </Router>
    )
  }
} 


const mapStateToProps = state => {
  return {
    contacts: state.contactReducer.contacts,
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = {
  loadContacts,
  setUser
}

export const BitApp = connect(mapStateToProps, mapDispatchToProps)(_BitApp)