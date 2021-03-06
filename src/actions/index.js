import *as actionTypes from './actionTypes';



export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            user
        }
    }
}


export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    }
}


/* Channel Actions */
export const setCurrentChannel = channel => {
    return {
        type: actionTypes.SET_CURRENT_CHANNEL,
        payload: {
            currentChannel: channel
        }
    }
}