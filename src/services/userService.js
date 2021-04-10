import {
    utilService
} from './util.service.js';

const user = {
    username: "Eran Sevil",
    coins: 100,
    moves: []

}


export default {
    getLoggedInUser,
    signUp,
    addMove,
    getContactMoves,
    getUserMoves
}

function getLoggedInUser() {
    const savedUser = utilService.loadFromStorage('loggedinUser')

    if (savedUser) return savedUser
    else {
        utilService.saveToStorage('loggedinUser', user)
        return user
    }
}

function signUp({
    username
}) {
    user.username = username;
    utilService.saveToStorage('loggedinUser', user)
    return user;

}

function addMove(contact, amount) {
    const transaction = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
    }
    const savedUser = utilService.loadFromStorage('loggedinUser')
    savedUser.moves.push(transaction);
    console.log( savedUser.moves)
    const coins = savedUser.moves.reduce((acc, move) => {
        return acc - move.amount
    }, 100)
    if (coins < 0) throw new Error('not enough budget')

    savedUser.coins = coins
    utilService.saveToStorage('loggedinUser', savedUser)
    return savedUser;
}

function getContactMoves(contactId) {
    const savedUser = utilService.loadFromStorage('loggedinUser')
    return savedUser.moves.filter(move =>{
        console.log('move.toId')
        console.log('contactId',contactId)
        return move.toId === contactId
    })
}

function getUserMoves(){
    const savedUser = utilService.loadFromStorage('loggedinUser')
    return savedUser.moves.slice(0,3)
}