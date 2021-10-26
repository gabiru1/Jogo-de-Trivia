import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RankingCard from '../Component/RankingCard';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.getRankings = this.getRankings.bind(this);
  }

  getRankings() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return ranking;
  }

  render() {
    return (
      <section>
        <h1 data-testid="ranking-title">
          Ranking
        </h1>
        <section>
          <ul>
            {
              this.getRankings().map(({ name, score, picture }, index) => (
                <li key={ index }>
                  <RankingCard
                    name={ name }
                    score={ score }
                    gravatar={ picture }
                    index={ index }
                  />
                </li>
              ))
            }
          </ul>
        </section>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            {' '}
            Início
            {' '}
          </button>
        </Link>
      </section>
    );
  }
}

export default Ranking;
