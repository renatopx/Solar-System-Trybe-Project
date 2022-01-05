import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missionCard">
          {
            missions.map((e) => (
              <MissionCard
                key={ e.name }
                name={ e.name }
                year={ e.year }
                destination={ e.destination }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default Mission;
