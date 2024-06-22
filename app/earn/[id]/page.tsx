'use client';

export default function TaskPage({ params }: { params: { id: string } }) {
  console.log('params', params);
  return (
    <div className="w-full h-full relative py-4 px-10 bg-gradient-to-b from-[#5F22A0] to[#160C20]">
      <div className="mx-auto mt-2 w-[10vw] h-[5px] rounded-full bg-white/30" />
      <div>
        <p className="mt-2.5 font-termina700 text-center">
          <span className="text-text-accent">Learn</span> to earn
        </p>
      </div>
    </div>
  );
}
