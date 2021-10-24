import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    isloading: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                user: action.payload.user,
                isloading: false
            }

        case actionTypes.CLEAR_USER:
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }

}


const initialChannelState = {
    currentChannel: null
};

const channelReducer = (state = initialChannelState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel
            }
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    user: userReducer,
    channel: channelReducer
})


export default rootReducer;