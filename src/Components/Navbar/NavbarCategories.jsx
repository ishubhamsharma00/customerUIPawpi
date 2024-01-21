import React,{useState} from 'react'
import NavLinks from './NavLinks';


const NavbarCategories = () => {
const [isOpen, setIsOpen] = useState(false);
let temp = isOpen;

return (
<>
    <nav className='z-50 w-full'>
        <div className='flex items-center font-medium flex-col md:flex-row w-full'>
            {/* for pc and tablet */}
            <div className='hidden md:flex overscroll-none justify-around items-center w-full'>
                <ul className='md:flex hidden items-center w-full justify-center'>
                    <NavLinks temp={temp} />
                </ul>
            </div>

             {/* Mobile View */}
            <div className={`md:hidden bg-white absolute w-full z-10 h-full bottom-0 top-16 duration-500 ${isOpen
                ? 'right-0' : 'left-[-100%]' }`}>
                <NavLinks temp={temp} />
            </div>
        </div>
    </nav>
</>
)
}

export default NavbarCategories;