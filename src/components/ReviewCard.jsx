import { reviews } from '../constants/index';
import { star } from '../assets/icons'

const ReviewCard = ( {imgURL, rating, feedback, name} ) => {
    return (
        <div>
            <img 
                src={imgURL}
                alt="Reviewer"
                className='w-50 h-auto'
            />

            <p>
                {feedback}
            </p>

            <div>
                <img
                    src={star}
                    alt='star'
                />
                <p>{rating}</p>
            </div>

            <p>{name}</p>

        </div>
    )

}

export default ReviewCard;