import { offer } from "../assets/images/index"
import Button from "../components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex justify-center gap-8">
                <img
                    src={offer}
                    alt="Special Offer Image"
                    className="w-[50%]"
                    />
                
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-black-500 font-palanquin mt-16">
                        <span className="text-coral-red">Special</span> Offer
                    </h1>

                    <p className="font-montserrat text-gray-500 text-lg my-6">Embark on a shopping journey that redeines your experience with 
                        unbeatable deals. From premier selections to incredible savings, 
                        we offer unparalleled value that sets us apart</p>

                    <p className="font-montserrat text-gray-500 text-lg my-6">
                        Navigate a realm of possibilities designed to fulfill your unique
                        desires, surpassing the loftiest expectations. Your journey with us is nothign short of 
                        exception.
                    </p>
                    <div className="flex justify-start gap-4 my-5">
                        <Button
                            label="View details"

                        />

                        <Button 
                            label="Learn more"
                            backgroundColor="bg-white"
                            borderColor="border-slate-500"
                            textColor="text-slate-500"
                        />
                    </div>
                </div>  
        </section>
    )
}

export default SpecialOffer;