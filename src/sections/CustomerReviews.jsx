import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants/index'

const CustomerReviews = () => {
    return (
        <section >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold">
                    What Our <span className="text-coral-red">Customers</span> Say?
                </h1>

                <p className="font-montserrat text-lg text-gray-500">
                    Hear genuine stories from our satisfied customers about their exception experiences with us
                </p>
            </div>

            <div className='flex flex-col gap-8 md:flex-row mt-16'>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        rating={review.rating}
                        feedback={review.feedback}
                        name={review.customerName}
                    />
                ))}
            </div>

        </section>
    )
}

export default CustomerReviews;