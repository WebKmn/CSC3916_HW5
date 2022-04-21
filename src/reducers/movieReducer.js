/*
* Receives data from Movie Actions as action parameter
* Based on action.type returns a state that's passed into the Store
*/

import constants from '../constants/actionTypes';

let initialState = {
    movies: [],
    selectedMovie: null
};

const movieReducer = (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch (action.type) {
        case constants.SET_MOVIE:
            updated['selectedMovie'] = action.selectedMovie;
            return updated;
        case constants.FETCH_MOVIE:
            updated['selectedMovie'] = action.selectedMovie;
            return updated;
        case constants.FETCH_MOVIES:
            updated['movies'] = action.movies;
            updated['selectedMovie'] = action.movies[0];
            return updated;
        default:
            return state;
    }
}

export default movieReducer;