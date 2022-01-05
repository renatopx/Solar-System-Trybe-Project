import React from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planetas">
          {planets.map((valor) => (
            <PlanetCard
              key={ valor.name }
              planetName={ valor.name }
              planetImage={ valor.image }
            />
          ))}
        </section>
      </div>
    );
  }
}
export default SolarSystem;
