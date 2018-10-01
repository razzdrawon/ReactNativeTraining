export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_FILM':
            console.log('action', action);
            return {...state, films:[...state.films, action.film]};
        default:
            return state;
    }
};