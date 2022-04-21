import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitReview} from '../actions/reviewActions';
import {Card, ListGroupItem, Form, Button} from 'react-bootstrap';

class ReviewDetail extends Component {
    constructor(props) {
        super(props);
        this.sendReview = this.sendReview.bind(this);
        this.updateDetails = this.updateDetails.bind(this);

        this.state = {
            details: {
                user: '',
                movie: this.props.title,
                rating: '',
                review: ''
            }
        };
    }

    componentDidMount() {}

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);
        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    sendReview(){
        const {dispatch} = this.props;
        dispatch(submitReview(this.state.details))
    }

    render(){
        return(
            <Card>
                <ListGroupItem>Add A Review</ListGroupItem>
                <Card.Body>
                    <Form className='form-horizontal'>
                        <Form.Group controlId='rating'>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control onChange={this.updateDetails} value={this.state.details.rating} type='number'
                                          placeholder='Out of 5 Starts' />
                        </Form.Group>

                        <Form.Group controlId='review'>
                            <Form.Label>Review</Form.Label>
                            <Form.Control onChange={this.updateDetails} value={this.state.details.review} type='text'
                                          placeholder='What do you think?' />
                        </Form.Group>

                        <Button onClick={this.sendReview}>Add</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(ReviewDetail);