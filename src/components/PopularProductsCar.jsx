import {star} from '../assets/icons'

const PopularProductsCard = ( {imgURL, name, price} ) => {

    return(
        <div>
            
            <div className="flex justify-center items-center rounded-xl">
                {imgURL && <img 
                    src={imgURL}
                    alt="Product Image"
                    height={300}
                    width={300}
                />}
            </div>

            <div className='p-5'>
                <div className='flex justify-content gap-2 '>
                    <img 
                        src={star}
                        alt="Rating"
                    />
                    <p className='text-gray-500'>(4.5)</p>
                </div>

                <div className=''>
                    <p className='py-3 text-lg font-bold font-black-900 font-palanquin'>{name}</p>

                    <p className='font-bold text-lg text-coral-red'>{price}</p>
                </div>
            </div>


        </div>
    );
};

export default PopularProductsCard;