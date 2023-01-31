import PropTypes from 'prop-types';

export const Statistics = ({ title, good, neutral, bad, total, positivePercentage  }) => {
    return (
        <div>
            <h2>{title}</h2>
            
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {Math.round(positivePercentage)}%</p> 
        </div>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};





