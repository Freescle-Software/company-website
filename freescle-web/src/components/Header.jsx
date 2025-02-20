import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="sticky top-3 z-20 w-full bg-white rounded-2xl mb-3 border-2 border-solid border-violet-900 shadow-[0_0_20px_5px_rgba(102,51,153,0.8)]">
            <div className="grid grid-cols-6 w-[100%] ">
                <div className="col-span-1 left-0 text-3xl place-content-center place-items-center mx-2">
                    <Link to="/" className="text-black flex place-items-center">
                        <img src="https://res.cloudinary.com/dnkhpkpy4/image/upload/v1732113691/Frame_4_dueadi.png"
                             className="w-[60px] h-[60px] rounded-full"/>
                        Freescle Software
                    </Link>
                </div>
                <div
                    className="col-2 col-span-4 place-content-center place-items-center *:text-black *:hover:bg-black *:hover:text-white *:hover:transition *:hover:delay-50  *:hover:duration-1000 *:hover:ease-in-out *:rounded-xl *:p-2 *:m-4">
                    <Link to="/">Home</Link>
                    <Link to="/services">services</Link>
                    <Link to="/findsolutions">Find Solutions</Link>
                    <Link to="/whyus">Why us</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div className="place-content-center">
                    <button className="col-6 col-span-1">Contact Us</button>
                </div>
            </div>
        </nav>
    )
}

export default Header