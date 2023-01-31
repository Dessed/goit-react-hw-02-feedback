import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';


export class ReviewsPage extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    
      onLeaveFeedback = (e) => {
        const nameReview = e.target.name;
        this.setState((prevState) => ({
                [nameReview]: prevState[nameReview] + 1,
            })      
        )};

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const sum  = good + neutral + bad;
        return sum; 
        };

    countPositiveFeedbackPercentage() {
        const percentage = (this.state.good * 100) / this.countTotalFeedback();
        return percentage;
        };
        
    render () {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
       
        return ( 
            <>
            <Section title='Please leave feedback'>
                <FeedbackOptions props={this.state} clickState={this.onLeaveFeedback}/>
            </Section>        

            <Section title='Statistics'>
                {total === 0 ? 
                <Notification messsage="There is no feedback"/> :
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={Math.round(positivePercentage)}/>
                }
            </Section>
            </>
        );
    };
}

