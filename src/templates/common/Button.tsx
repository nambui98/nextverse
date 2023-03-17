export const Button = ({
  children,
  className,
  onClick,
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={`relative top-0 rounded-2xl bg-[#f68b1f] px-10 py-4 shadow-[0_6px_0px_#C27006] transition-all active:top-1 active:shadow-[0_2px_0px_#C27006] md:px-10 md:py-6 ${className}`}
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
      className={`rounded-xl border-2 bg-transparent 
      text-white
      transition-all
      hover:bg-white
      hover:text-dark-100
 md:p-4
     lg:px-4 
       xl:px-6 2xl:px-8 2xl:py-6${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonTertiary = ({
  children,
  className,
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-xl border-2 border-[#ff9000] bg-white px-10 py-6 text-[#ff9000] transition-all hover:border-dark-200 hover:bg-[#ff9000] hover:text-dark-100 ${className}`}
    >
      {children}
    </button>
  );
};
