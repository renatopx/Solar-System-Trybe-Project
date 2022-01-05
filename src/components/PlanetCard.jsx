import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          className={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p className="nomePlaneta" data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};
PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};
export default PlanetCard;
