import PropTypes from 'prop-types';
import { Component } from 'react';


export class ReviewsPage extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    
      
    onAddReview = (e) => {
        const nameReview = e.target.name;
        this.setState((prevState) => ({
                [nameReview]: prevState[nameReview] + 1,
            })      
        )};

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
           
        const sum  = good + neutral + bad;
        return sum; 
        }

    countPositiveFeedbackPercentage() {
        const percentage = (this.state.good * 100) / this.countTotalFeedback();
        return percentage;
        }
        
    render () {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
       
        return ( 
            <section>
                <h1>Please leave feedback</h1>
                
                <button type='button' name='good' onClick={this.onAddReview}>Good</button>
                <button type='button' name='neutral' onClick={this.onAddReview}>Neutral</button>
                <button type='button' name='bad' onClick={this.onAddReview}>Bad</button>

                <h2>Statistics</h2>

                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {Math.round(positivePercentage)}%</p>
            </section>
        );
    };
}


