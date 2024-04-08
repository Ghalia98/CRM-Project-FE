
const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    _id: '',
    toUpdate: false,
}
export default (state= initialState, action) => {
   switch (action.type) {
       case 'INITIAL_FETCH':
           return {
               ...state,
               people: action.payload
           }
       case 'SELECTED_PERSON':
           return {
               ...state,
               detailView: true,
               personSelected: action.selectId,
           }

       case 'NONE SELECTED':
           return {
               ...state,
               detailView: false,
               personSelected: null,
           }
       default:
           return state;
   }
}
