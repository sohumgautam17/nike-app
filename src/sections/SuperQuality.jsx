import { shoe8 } from "../assets/images";

const SuperQuality = () => {
    return (
        <section className="flex justify-between max-w-screen-xl ">
            <div className="w-[40%]">
                <h1 className="text-4xl font-bold font-black-900 font-palanquin]"> We Provide you 
                    <span className="text-coral-red"> Super Quality </span>
                    Shoes
                </h1>
                
                <p className="font-montserrat text-gray-500 text-lg my-6 leading-7">
                    Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.
                </p>

                <p className="font-montserrat text-gray-500 text-lg leading-7">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>

                <button className="bg-orange-500 rounded-3xl text-md text-white font-montserrat
                                    w-34 px-4 py-3 mt-10 hover:animate-pulse">
                    View details
                </button>
            </div>
            <div className="flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="Shoe Display"
                    className=""
                />
            </div>
        </section>
    )
}

export default SuperQuality;