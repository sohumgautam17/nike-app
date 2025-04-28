import { reviews } from '../constants/index';
import { star } from '../assets/icons'

const ReviewCard = ( {imgURL, rating, feedback, name} ) => {
    return (
        <div className='flex flex-col items-center mx-16 gap-4'>
            <img 
                src={imgURL}
                alt="Reviewer"
                className='w-[30%] rounded-full'
            />

            <p className='text-lg text-center font-montserrat text-gray-500 w-[80%]'>
                "{feedback}"
            </p>

            <div className='flex gap-2'>
                <img
                    src={star}
                    alt='star'
                />
                <p className='text-lg font-montserrat text-gray-500'>({rating})</p>
            </div>

            <p className='text-2xl font-bold font-palanquin'>{name}</p>

        </div>
    )

}

export default ReviewCard;