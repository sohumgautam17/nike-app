const Button = (label, iconURL) => {

    return (
        <button>

            {label}
            {<img 
                src={iconURL} 
                alt="right arrow icon" 
                className="w-5 h-5">
            </img>}
        </button>
    );
};

export default Button;