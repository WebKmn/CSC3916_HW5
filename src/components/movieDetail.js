import React, {Component} from 'react';
import '../styles/movielist.css'
import {connect} from 'react-redux';
import {BsStarFill} from 'react-icons/bs';
import  {fetchMovie} from '../actions/movieActions';
import ReviewDetail from './reviewDetail';
import {Image, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

class MovieDetail extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        if(this.props.selectedMovie === null){
            dispatch(fetchMovie(this.props.title));
        }
    }

    render(){
        const DetailInfo = () => {
            if (!this.props.selectedMovie) {
                return <div>Loading...</div>
            }

            return (
                <Card>
                    <Card.Header>{this.props.selectedMovie.title}</Card.Header>
                    <Card.Body>
                        <Image className='image' src={this.props.selectedMovie.imgUrl} thumbnail/>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Cast</ListGroupItem>
                        <ListGroupItem>
                            {this.props.selectedMovie.actors.map((actor, i) =>
                                <p key={i}>
                                    <b>{actor.actorName}</b> as {actor.characterName}
                                </p>)}
                        </ListGroupItem>
                        <ListGroupItem>
                            <h4>
                                <BsStarFill/> {this.props.selectedMovie.avgRating}
                            </h4>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {this.props.selectedMovie.reviews.map((review, i) =>
                            <p key={i}>
                                <b>{review.user}</b>&nbsp; {review.review}
                                &nbsp; <BsStarFill/> {review.rating}
                            </p>)}
                    </Card.Body>
                    <ReviewDetail title={this.props.selectedMovie.title}/>
                </Card>
            )
        }

        return(
            <DetailInfo />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetail);