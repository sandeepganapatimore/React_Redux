
import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numofCake: 0
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numofCake: state.numofCake + action.payload
        }

        default: return state
    }
}
export default cakeReducer