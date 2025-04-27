import { services } from '../constants/index.js';
import ServicesCard from '../components/ServiceCard.jsx';

const Services = () => {
    return (
        <section className='flex justify-between'>

            {services.map((service, index) => (
                <ServicesCard
            
                    key={index}
                    imgURL={service.imgURL}
                    label={service.label}
                    subtext={service.subtext}
                />
                 
            ))}

            
        </section>
    )
}

export default Services;