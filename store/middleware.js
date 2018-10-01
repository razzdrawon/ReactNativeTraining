const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {

  console.log('action type: ', action.type, getState());
  const url = `http://localhost:5000/api/films`;

  if(action.type === 'FETCH_FILMS')
  {
    console.log(action.type);
    
    fetch(url)
    .then(res => res.json())
    .then(films => {

      console.log('films middleware: ', films);

      films.map(film => {
        dispatch({type:"ADD_FILM", film: theFilm});
      });

    })

  }
  next(action);
  console.warn(action.type, getState())
};

export default [ fetchFilmsMiddleware ];