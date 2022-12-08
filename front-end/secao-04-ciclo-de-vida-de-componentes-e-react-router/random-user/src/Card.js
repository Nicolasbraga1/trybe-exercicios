import React from "react";
import PropTypes from 'prop-types';

class Card extends React.Component {
  render () {
    const { person: { name, email, age, image } } = this.props;
    return(
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src= {image} alt= {name} />
      </div>
    )
  }
}

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Card;