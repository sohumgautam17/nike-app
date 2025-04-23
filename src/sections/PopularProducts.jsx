import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCar';

const PopularProducts = () => {
    return (
        <section className=''>
            <div>
                <h1 className='text-3xl font-bold font-black-900 font-palanquin'>
                    Our <span className='text-coral-red'> Popular</span> Products 
                </h1>

                <p className='font-montserrat text-gray-500 text-md w-[50%] my-4'>
                    Experience top-notch quality and style with our sought-after selection. 
                    Discover a world of comfort, design, and value.
                </p>

                <div className='flex gap-[3%] mt-10'>
                    {products.map((product, index) => (
                        <PopularProductsCard
                            key={index}
                            imgURL={product.imgURL}
                            name={product.name}
                            price={product.price}
                        />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularProducts;