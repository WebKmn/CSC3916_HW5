import React, {Component} from 'react';
import '../styles/movielist.css'
import {connect} from 'react-redux';
import {BsStarFill} from 'react-icons/bs';
import {Image, Nav, Carousel} from 'react-bootstrap';
import  {setMovie, fetchMovies} from '../actions/movieActions';
import {LinkContainer} from 'react-router-bootstrap';

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovies());
    }

    handleSelect(selectedIndex, e){
        const {dispatch} = this.props;
        dispatch(setMovie(this.props.movies[selectedIndex]));
    }

    handleClick = (movie) => {
        const {dispatch} = this.props;
        dispatch(setMovie(movie));
    }

    render() {
        const MovieListCarousel = ({movieList}) => {
            if(!movieList){
                return <div>Loading...</div>
            }

            return(
                <Carousel onSelect={this.handleSelect}>
                    {movieList.map((movie) =>
                        <Carousel.Item key={movie.title}>
                            <div>
                                <LinkContainer to={'/movie/'+movie.title} onClick={()=>this.handleClick(movie)}>
                                    <Nav.Link><Image className="image" src={movie.imgUrl} thumbnail fluid /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                                <BsStarFill glyph={'star'} />{movie.avgRating} &nbsp;&nbsp; {new Date(movie.releaseDate).toDateString()}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            )
        }
        return(
            <MovieListCarousel movieList={this.props.movies} />
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps)(MovieList);