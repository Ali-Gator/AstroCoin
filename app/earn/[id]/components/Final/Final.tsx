import { AppRoutes } from '@/config/routes';
import Link from 'next/link';

export const Final = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-12"
      style={{ height: 'calc(100vh - 120px)' }}
    >
      <p className="font-termina600 text-3xl text-center">
        All Done! <span className="text-text-accent">Good job!</span>
      </p>
      <Link
        className="px-4 py-2.5 rounded-[10px] text-xl bg-background-buttons text-text-dark"
        href={AppRoutes.Earn}
      >
        Back to Quizizz
      </Link>
    </div>
  );
};
