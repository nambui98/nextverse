

export const Button =({children, className}:React.HTMLProps<HTMLButtonElement>)=>{
  return <button className={`bg-[#f68b1f] shadow-[0_6px_0px_#C27006] rounded-2xl px-10 py-6 transition-all relative top-0 active:shadow-[0_2px_0px_#C27006] active:top-1 ${className}`}>{children}</button>
}
export const ButtonSecond =({children, className}:React.HTMLProps<HTMLButtonElement>)=>{
  return <button className={`bg-transparent border-2 text-white rounded-xl px-8 py-6 transition-all hover:bg-white hover:text-dark-100 ${className}`}>{children}</button>
}