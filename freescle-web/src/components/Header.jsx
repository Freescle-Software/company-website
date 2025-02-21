import {Link} from "react-router-dom";
import {HiBars3} from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import {useState} from "react";

const Navlinks = () => {
    return (
        <div
            className=" *:text-black *:border-solid *:border-black *:border-b-2 *:w-[80%] *:hover:bg-black *:hover:border-purple-600 *:hover:shadow-xs *:hover:shadow-purple-600 *:hover:text-white *:hover:transition *:hover:duration-700 *:hover:ease-in-out md:*:w-auto  md:*:border-none w-full justify-center items-center *:rounded-full *:p-4 *:flex *:items-center *:m-2  md:*:m-4 md:*:h-auto md:items-center flex flex-col md:flex-row md:justify-center *:font-serif">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/findsolutions">Our clients</Link>
            <Link to="/whyus">Meet Us</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

const Header = () => {

    const [isToggleopen, setToggleOpen] = useState(false);

    const handleToggle = () => setToggleOpen(!isToggleopen);

    return (
        <nav
            className="sticky top-3 z-20 w-full bg-white rounded-2xl border-2 border-solid border-violet-900 shadow-[0_0_10px_5px_rgba(102,51,153,0.6)]">
            <div className={`flex ${isToggleopen?'flex-col':'flex-row'} md:grid md:grid-cols-6 w-[100%]`}>
                <div className="flex whitespace-nowrap col-span-1 py-4 md:p-0 text-xl md:text-xl md:place-items-center mx-2">
                    <Link to="/" className="text-black flex place-items-center">
                        <img src="https://res.cloudinary.com/dnkhpkpy4/image/upload/v1732113691/Frame_4_dueadi.png"
                             className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"/>
                        <p className="px-2 font-serif">Freescle Software</p>
                    </Link>
                </div>
                <div className={`${isToggleopen ? "flex" : "hidden"} w-full md:col-2 md:col-span-4 place-content-center place-items-center md:flex`}>
                    <Navlinks />
                </div>
                <div className="place-content-center place-items-center p-3 m-3 md:p-2 md:m-2">
                    <button className={`${isToggleopen ? '': 'hidden'} md:flex font-serif`}>Contact Us</button>
                    <HiBars3 onClick={handleToggle} className={`absolute top-5 mr-3 md:top-4 right-0 md:mr-6 col-6 place-content-center ${isToggleopen ? 'hidden': ''} hover:cursor-pointer md:hidden text-black text-3xl`} />
                    <RxCross2 onClick={handleToggle} className={`absolute top-5 mr-3 md:top-4 right-0 md:mr-6 col-6 place-content-center ${isToggleopen ? '': 'hidden'} hover:cursor-pointer md:hidden text-black text-3xl`} />
                </div>

            </div>
        </nav>
    )
}

export default Header