import moon from '@/public/icons/moon.svg';
import Image from 'next/image';

export function TopHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-5 items-center">
        <Image
          src={moon}
          alt="moon"
          style={{ objectFit: 'cover' }}
          width={72}
          height={72}
        />
        <span className="text-7xl">🧠</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[32px] font-termina700 text-center tracking-tight-title leading-8">
          Complete the
          <br /> tasks to earn
        </span>
        <span className="opacity-80 font-inter font-medium text-md">
          How to get started?
        </span>
      </div>
    </div>
  );
}
