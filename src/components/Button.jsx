const Button = ({ label, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-3xl font-montserrat text-lg leading-none
      ${backgroundColor ? backgroundColor : 'bg-coral-red'} 
      ${textColor ? textColor : 'text-white'}
      ${borderColor ? borderColor : 'border-coral-red'}
      ${fullWidth && 'w-full'}`}
    >
      {label}
    </button>
  );
};

export default Button;