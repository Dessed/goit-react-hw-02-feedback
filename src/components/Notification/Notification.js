import PropTypes from 'prop-types';

export const Notification = ({ messsage }) => {
    return (
    <p>{messsage}</p>
    );
};


Notification.propTypes = {
    title: PropTypes.string,
};