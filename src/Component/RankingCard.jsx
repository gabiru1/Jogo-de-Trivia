import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RankingCard extends Component {
  render() {
    const { name, score, gravatar, index } = this.props;
    return (
      <div>
        <span>
          { index + 1 }
        </span>
        <img
          src={ gravatar }
          alt={ name }
        />
        <span data-testid={ `player-name-${index}` }>
          { name }
        </span>
        <span data-testid={ `player-score-${index}` }>
          { score }
        </span>
      </div>
    );
  }
}

RankingCard.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  gravatar: PropTypes.string,
}.isRequired;

export default RankingCard;
