import { BUY_CREAM } from "./CreamTypes";

const initialState = {
    creams: 50
}

const creamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CREAM: return {
            ...state,
            creams: state.creams - 5
        }
        default: return state
    }
}

export default creamReducer