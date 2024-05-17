import { InnerPage } from '@/widgets/InnerPage';
import styles from './page.module.css';
import { IPlanet, Planet } from './components/Planet';
import { EPlanetType } from '@/components/PlanetItem';

const planetsData: IPlanet[] = [
  {
    type: EPlanetType.Earth,
    isActive: true,
  },
  {
    type: EPlanetType.Moon,
  },
  {
    type: EPlanetType.Mars,
  },
  {
    type: EPlanetType.Saturn,
  },
  {
    type: EPlanetType.Kempel241,
  },
];

export default function Page() {
  return (
    <InnerPage title="Planets levels" subtitle="Demo">
      <ul className={styles.planetsWrapper}>
        {planetsData.map((planet) => (
          <Planet key={planet.type} {...planet} />
        ))}
      </ul>
    </InnerPage>
  );
}
