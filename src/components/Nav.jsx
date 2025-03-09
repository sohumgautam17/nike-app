import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'
const Nav = () => {
    return (
        <header>
            <nav className="flex justify-between items-center 
            padding-x relative z-10 py-8">
                <a href="/">
                    <img src={headerLogo} 
                    alt='logo' 
                    width={129} 
                    height={29}/>
                </a>
                <ul className="flex justify-between items-center
                gap-8 ml-auto mr-10 max-lgl:hidden hover:cursor-pointer">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat 
                            leading-normal text-lg text-slate-gray animated-underline">
                                {item.label}
                            </a>
                        </li>
                    ))}
                    
                </ul>
                <div>
                    <button className="flex justify-center items-center p-2 px-4
                    gap-16 bg-black rounded-3xl hover:bg-gray-500 transition-all 
                    duration-200 translate-y-0 hover:-translate-y-0.5 text-white">
                        <span>Shop Now</span>
                    </button>
                </div>
                <div className="ml-6">
                    <img
                    src={hamburger}
                    alt='Hamburger Menu'
                    width={25}
                    heigh={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;