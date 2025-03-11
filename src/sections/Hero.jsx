import { useState } from 'react'
import Button from '../components/Button'
import { ShoeCard } from '../components/ShoeCard'
import {arrowRight} from '../assets/icons'
import { statistics, shoes } from '../constants'

const Hero = () => {
    const [ bigShoeImg, setBigShoeImg ] = useState(shoes[0].bigShoe)
    
    return (
        <section className='flex flex-col-2'>
                <div className="relative flex flex-col justify-center items-start w-[90%] 
                    md:w-[80%] lg:w-[60%] xl:w-[50%] px-[5%] pt-5">

                    <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>

                    <h1 className="text-8xl font-bold font-black-900 font-palanquin my-6 bg-white-500">  
                        <span>The New Arrival</span>
                        <br />
                        <span className="text-coral-red">Nike</span> Shoes
                    </h1>

                    <p className="font-montserrat text-gray-500 text-xl w-[60%]">Discover stylish Nike arrivals, quality, 
                        comfort, and innovation for your active life.</p>

                    <Button label="Shop Now" iconURL={arrowRight}/>

                    <div className='flex justify-start items-start flex-wrap gap-16'>  
                        {statistics.map((info, index) => {
                            return (
                                <div key={index} className=''>
                                    <h1 className='text-4xl font-bold font-palanquin'>{info.value}</h1>
                                    <p className='text-gray-500 font-montserrat'>{info.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <div className='flex absolute'>
                    <img 
                        src={bigShoeImg}
                        alt='Big Shoe Display'
                        className='object-contain z-10 relative'
                        width={500}
                        height={500}
                    />
                </div>
                
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <ShoeCard
                            key={index}
                            imgURL={shoe}
                            changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                        />
                    ))}
                </div>
            </div>

                

        </section>
    )
}

export default Hero;