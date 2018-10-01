export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_FILM':
            console.log('action', action);
            let stateToReturn = {...state, films:[...state.films, action.film]};
            console.log('newState: ', stateToReturn);
            return stateToReturn;
        default:
            return state;
    }
};