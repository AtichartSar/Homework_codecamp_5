import ActionTypes from "./actionTypes"

const initialState = {
    number: 0,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {
                ...state,
                number: state.number + 1
            }
        case ActionTypes.DECREASE:
            return {
                ...state,
                number: state.number - 1
            }
        case ActionTypes.PLUS:
            return {
                ...state,
                number: state.number + 1
            }
        default:
            return state
    }

}
export default reducer