import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from "../IceCreams/userAction"

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchUserRequest:
            return {
                ...state,
                loading: true
            }
        case fetchUserSuccess:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case fetchUserFailure:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default ApiReducer