import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const Hero = () => {

    return (
        <section>
                <div className="border border-red-500 relative flex flex-col justify-center items-start w-[90%] 
                    md:w-[80%] lg:w-[60%] xl:w-[40%] px-[5%] pt-28">

                    <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>

                    <h1 className="text-8xl font-bold font-black-900 font-palanquin my-6">  
                        <span >The New Arrival</span>
                        <br />
                        <span className="text-coral-red">Nike</span> Shoes
                    </h1>

                    <p className="font-montserrat text-gray-500">Discover stylish Nike arrivals, quality, 
                        comfort, and innovation for your active life.</p>

                    <Button label="/Shop Now" iconURL={arrowRight}/>
                </div>
                

        </section>
    )
}

export default Hero;