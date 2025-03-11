const Button = ( {label, iconURL} ) => {

    return (
        <button className="flex flex-row gap-2 bg-orange-500 rounded-3xl w-34 px-4 py-3 my-16 text-white font-montserrat">

            {label}
            { iconURL && (<img 
                src={iconURL} 
                alt="right arrow icon" 
                className="w-5 h-5">
            </img>
            )}
        </button>
    );
};

export default Button;