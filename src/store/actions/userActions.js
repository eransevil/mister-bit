import userService from '../../services/userService.js'

export function SignUp(username) {
    return async dispatch => {
        const user = userService.signUp(username)
        dispatch({
            type: 'SET_USER',
            username: user
        })
    }
}
export function setUser() {
    return async dispatch => {
        const user = userService.getLoggedInUser()
        dispatch({
            type: 'SET_SAVEDUSER',
            user
        })
    }
}

export function Transfer({
    contact,
    amount
}) {
    return async dispatch => {
        const updatedUser = userService.addMove(contact, amount)
        dispatch({
            type: 'UPDATE_USER',
            updatedUser
        })

    }
}