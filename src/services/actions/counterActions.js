import { DECREASE, INCREASE, RESET } from "../constants/counterConstants"

export const increaseAction = () =>{
    return{
        type: INCREASE
    }
}
export const decreaseAction = () =>{
    return{
        type: DECREASE
    }
}
export const resetAction = () =>{
    return{
        type: RESET
    }
}