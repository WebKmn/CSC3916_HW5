import React from 'react';

import './styles/App.css';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

import store from './stores/store';
import Movie from './components/movie';
import MovieList from './components/movieList';
import MovieHeader from './components/movieHeader';
import Authentication from './components/authentication';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={() => <MovieList />}/>
            <Route exact path="/movielist" render={() => <MovieList />}/>
            <Route exact path="/movie/:title" render={() => <Movie />}/>
            <Route exact path="/signin" render={() => <Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
