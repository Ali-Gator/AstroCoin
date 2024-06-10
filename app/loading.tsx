import styles from './page.module.css';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Image src="/logo.svg" alt="AstroCoin Logo" width={164} height={20} />
      <div className={styles.animatedGradient} />
      <p className="mt-[100px] text-xl opacity-40">
        It&rsquo;s just a game, maybe
      </p>
    </div>
  );
}
