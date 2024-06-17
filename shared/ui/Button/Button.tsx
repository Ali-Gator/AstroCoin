export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${className} rounded-[14px] w-full uppercase text-black bg-white p-5 text-xl font-termina600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
