import styles from './page.module.css';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Image
        src="/logo.svg"
        alt="XSYCOIN Logo"
        width={260}
        height={12}
      />
      <div className={styles.animatedGradient} />
    </div>
  );
}
