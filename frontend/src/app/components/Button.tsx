import Link from "next/link"; 

interface ButtonProps {
  text: string;
  className?: string;
  href?: string; 
}

const PrimaryButton = ({ text, className = "", href }: ButtonProps) => {
 
  const baseStyles = `inline-flex justify-center items-center px-20 py-4 bg-[#E9E9E9] text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95 ${className}`;

  if (href) {
    return (
      
      <Link href={href} className={baseStyles}>
        {text}
      </Link>
    );
  }
  
  return (
    <button className={baseStyles}>
      {text}
    </button>
  );
};

export default PrimaryButton;