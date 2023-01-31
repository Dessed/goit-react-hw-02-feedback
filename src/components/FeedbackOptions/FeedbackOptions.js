import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ props, clickState }) => {
    const buttons = Object.keys(props);

    return (
        <div>
            {buttons.map(button => (
            <Button key={button} type='button' name={button} onClick={clickState}>
                {button.charAt(0).toUpperCase() + button.slice(1)}
            </Button>
            ))}
        </div>
    );    
};


FeedbackOptions.propTypes = {
    props: PropTypes.object,
    clickState: PropTypes.func,
};