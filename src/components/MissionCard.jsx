import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card" data-testid="mission-card">
        <p data-testid="mission-name"><strong>{name}</strong></p>
        <hr />
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};
MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};
export default MissionCard;
