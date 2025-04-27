const ServicesCard = ({ imgURL, label, subtext }) => {
    return(
        <div className="w-[30%] border rounded-3xl p-6 shadow-md">
            <div className="w-12 h-12 flex justify-center items-center bg-coral-red rounded-full my-2">
                <img
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                />
            </div>

            <h3 className="text-xl font-bold font-palanquin mb-2">
                {label}
            </h3>

            <p className="text-slate-gray font-montserrat mb-4">
                {subtext}
            </p>
        </div>
    )
}

export default ServicesCard