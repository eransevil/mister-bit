const INITIAL_STATE = {
    user: 
    {  
    username: "Eran Sevil",
    coins: 100,
    moves: []}
  }

  export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.username
        }
        case 'UPDATE_USER':
          const { updatedUser } = action
          return {
              ...state,
              user: updatedUser
          }
        case 'SET_SAVEDUSER':
          const { user } = action
          return {
              ...state,
              user:user
          }
      default:
        return state
    }
  }

  