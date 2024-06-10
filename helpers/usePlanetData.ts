import { EPlanetType } from '@/components/PlanetItem';
import earth from '@/public/planets/earth.png';
import mars from '@/public/planets/mars.png';
import saturn from '@/public/planets/saturn.png';
import kempel from '@/public/planets/kempel.png';
import moon from '@/public/planets/moon.png';
import { useMemo } from 'react';

export const usePlanetData = (type: EPlanetType) =>
  useMemo(() => {
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

      case EPlanetType.Moon: {
        imageSrc = moon;
        imageAlt = EPlanetType.Moon;
        planetName = EPlanetType.Moon;
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

      case EPlanetType.Kempel241: {
        imageSrc = kempel;
        imageAlt = EPlanetType.Kempel241;
        planetName = EPlanetType.Kempel241;
        break;
      }

      default:
        imageSrc = earth;
        imageAlt = EPlanetType.Earth;
        planetName = EPlanetType.Earth;
    }

    return { imageSrc, imageAlt, planetName };
  }, [type]);
