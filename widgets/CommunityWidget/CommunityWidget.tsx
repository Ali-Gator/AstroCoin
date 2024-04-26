import Image from 'next/image';
import { FC } from 'react';
import { ICommunityWidget } from '@/widgets/CommunityWidget/types';
import { EPlanetType, PlanetItem } from '@/components/PlanetItem';
import styles from './CommunityWidget.module.css';
import token from '../../public/main-token.svg';


export const CommunityWidget: FC<ICommunityWidget> = ({
                                                          imageSrc,
                                                          imageAlt,
                                                      }) => {
    return (
        <div className={styles.communityWidget}>
            <Image src={imageSrc} alt={imageAlt ?? ''} />
            <div className={styles.infoWrapper}>
                <p className={styles.title}>XSYCOIN COMMUNITY</p>
                <div className={styles.tokenWrapper}>
                    <p className={styles.sum}>14,593,386</p>
                    <Image className={styles.icon} src={token} alt={'main token'} />
                </div>
            </div>
            <PlanetItem type={EPlanetType.Earth} />
        </div>
    );
};
