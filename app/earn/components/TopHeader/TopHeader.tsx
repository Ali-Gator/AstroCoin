export function TopHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-5 items-center">
        <span className="text-7xl">💰</span>
        <span className="text-7xl">🧠</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[32px] font-termina700 text-center tracking-tight-title leading-8">
          Learn to earn
        </span>
        <span className="opacity-80 font-inter font-medium text-md text-center px-4">
          Do simple tasks, learn about web3 & pass quizes to earn AstroCoins{' '}
        </span>
      </div>
    </div>
  );
}
