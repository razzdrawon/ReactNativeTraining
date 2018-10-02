export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_FILM':
            console.log('action', action);
            let stateToReturn = {...state, films:[...state.films, action.film]};
            console.log('newState: ', stateToReturn);
            return stateToReturn;
        case "SET_SELECTED_DATE":
            return { ...state, selected_date: action.date };
        case "SET_SELECTED_FILM":
            return { ...state, selected_film: action.film };
        default:
            return state;
    }
};