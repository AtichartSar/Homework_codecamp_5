import ActionTypes from "./actionTypes"

const initialState = {
    numberList: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.SAVE_NUMBER:
            return {
                ...state,
                numberList: [...state.numberList,action.value ],

            }
        default:
            return state
    }

}
export default reducer