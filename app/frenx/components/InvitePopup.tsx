import Link from 'next/link';

export const InvitePopup = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between overflow-scroll">
      <div className="flex flex-col items-center">
        <p className="text-[32px] font-termina600">Invite your frens</p>
        <p className="text-2xl text-center">and enjoy incredible rewards:</p>
        <p className="text-lg mt-10 self-start">
          [ 10% ] of the mining earnings from each fren you refer
        </p>
        <p className="text-lg mt-4 self-start">
          [ 5% ] of the mining earnings from the frenx they refer
        </p>
        <p className="text-lg mt-4 self-start">
          [ 2.5% ] of the mining earnings from the frenx of those frenx
        </p>
      </div>
      <Link
        className="rounded-[14px] w-full uppercase text-black bg-white p-4 text-xl font-termina600 text-center"
        href={`https://t.me/share/url?url=https://t.me/AstroCoinTon_bot?start=${Math.ceil(Math.random() * 100000)}&text=Look! What I have`}
      >
        Invite a fren
      </Link>
    </div>
  );
};
