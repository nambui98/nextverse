export const Button = ({
  children,
  className,
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={`relative top-0 rounded-2xl bg-[#f68b1f] px-10 py-6 shadow-[0_6px_0px_#C27006] transition-all active:top-1 active:shadow-[0_2px_0px_#C27006] ${className}`}
    >
      {children}
    </button>
  );
};
export const ButtonSecond = ({
  children,
  className,
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-xl border-2 bg-transparent px-8 py-6 text-white transition-all hover:bg-white hover:text-dark-100 ${className}`}
    >
      {children}
    </button>
  );
};
