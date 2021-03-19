const initialState = {
    persionList: [

    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            console.log("Addperson", action.payload);
            return { ...state, 
                persionList: [...state.persionList, action.payload] };
        case 'EDIT_PERSON':
            console.log(action);
            const newPersonList = state.persionList.map(person => person.id === action.payload.id ? action.payload : person)
            console.log('new',newPersonList);
            return { ...state, 
                persionList: newPersonList }
        default:
            return state;
    }

}

export default reducer