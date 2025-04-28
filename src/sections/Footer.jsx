import { footerLogo } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons';

const icons = [facebook, instagram, twitter]

const Footer = () => {
    return (
        <section className="flex flex-row justify-between font-montserrat gap-2 w-full">
            <div className="max-w-sm">
                <img 
                    src={footerLogo}
                    alt="Nike Logo"
                    className="h-10 mb-4"
                />
                <p className="mt-2 text-gray-500 mb-4">Get Shoes ready for the new term at your nearest Nike store. Find your 
                perfect size in store and get rewards</p>
                <div className="flex gap-5 mt-5">
                    {icons.map((icon, index) => (
                        <img 
                            key={index}
                            src={icon}
                            alt={`Icon ${index+1}`}
                            className="w-10 h-10 cursor-pointer hover:opacity-80 filter invert"
                        />
                    ))}
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>
                    Products
                </h1>
                <ul className='text-gray-400 leading-8'>
                    <li>Air Force 1</li>
                    <li>Air Max 1</li>
                    <li>Air Jordan 1</li>
                    <li>Air Force 2</li>
                    <li>Nike Waffle Racer </li>
                    <li>Nike Cortez</li>

                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>
                    Help
                </h1>
                <ul className='text-gray-400 leading-8'>
                    <li>About us</li>
                    <li>FAQs</li>
                    <li>How it works 1</li>
                    <li>Privacy Policy</li>
                    <li>Payment Policy </li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>
                    Get in Touch
                </h1>
                <ul className='text-gray-400 leading-8'>
                    <li>customer@nike.com</li>
                    <li>+1 234 567 8910</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;