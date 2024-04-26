import { FC, useMemo } from 'react';
import Image from 'next/image';
import { EPlanetType, IPlanetItem } from '@/components/PlanetItem/types';
import earth from '../../public/planets/earth.png';
import mars from '../../public/planets/mars.png';
import saturn from '../../public/planets/saturn.png';
import styles from './PlanetItem.module.css';
import arrow from '../../public/icons/arrow-right.svg';

export const PlanetItem: FC<IPlanetItem> = ({ type }) => {
  const { imageSrc, imageAlt, planetName } = useMemo(() => {
    let imageSrc;
    let imageAlt;
    let planetName;

    switch (type) {
      case EPlanetType.Earth: {
        imageSrc = earth;
        imageAlt = EPlanetType.Earth;
        planetName = EPlanetType.Earth;
        break;
      }

      case EPlanetType.Mars: {
        imageSrc = mars;
        imageAlt = EPlanetType.Mars;
        planetName = EPlanetType.Mars;

        break;
      }

      case EPlanetType.Saturn: {
        imageSrc = saturn;
        imageAlt = EPlanetType.Saturn;
        planetName = EPlanetType.Saturn;
        break;
      }

      default:
        imageSrc = earth;
        imageAlt = EPlanetType.Earth;
        planetName = EPlanetType.Earth;
    }

    return { imageSrc, imageAlt, planetName };
  }, [type]);

  return (
    <div className={styles.PlanetItem}>
      <Image className={styles.planet} src={imageSrc} alt={imageAlt} />
      <p className={styles.title}>{planetName}</p>
      <Image className={styles.rightArrow} src={arrow} alt={''} />
    </div>
  );
};
