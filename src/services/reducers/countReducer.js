import { DECREASE, INCREASE, RESET } from "../constants/counterConstants";

const initialCounterState = {
    count: 0
};

const countReducer = (state =initialCounterState, action) => {
    switch (action.type) {
        case INCREASE:
            return{
                ...state,
                count: state.count + 1
            };
        case DECREASE:
            return{
                ...state,
                count: state.count - 1
            };
        case RESET:
            return{
                ...state,
                count: 0
            };
    
        default:
            return state;
    }
}

export default countReducer;