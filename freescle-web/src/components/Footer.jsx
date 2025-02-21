import { MdArrowForwardIos } from "react-icons/md";
import {useState} from "react";

const Footer = () => {
    const [Message, setMessage] = useState("");
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    return (
        <div className="h-[90vh] md:h-[80vh] w-auto bottom-0 p-3 text-white">
            <div className="h-[70%] border-gray-600 grid grid-cols-2 md:grid-cols-4 border-solid border-y-2 p-3">
                <div className="border-blue-600 flex flex-col border-solid border-2 col-1 col-span-2">
                    <div className="flex items-center md:ml-4 md:items-center md:p-4">
                        <img src="https://res.cloudinary.com/dnkhpkpy4/image/upload/v1732113691/Frame_4_dueadi.png"
                             className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full m-2"
                             alt="company logo"/>
                        <p className=" font-serif md:text-xl">Freescle Software</p>
                    </div>
                    <div className="flex md:mx-8 md:items-center text-left p-1">
                        <p className="mx-2 font-serif text-lg">We bring cutting edge solutions to you</p>
                    </div>
                    <div className="flex md:items-center md:mx-8 p-1 text-left">
                        <p className="p-2 font-serif font-bold text-xl md:text-2xl">Do you have any question for us
                            ?</p>
                    </div>
                    <div className="flex md:items-center md:mx-8 p-1 text-left">
                        <input type="text" placeholder="Message..." value={Message} onChange={handleMessage} className='w-[60%] ml-2 placeholder:text-slate-400 text-slate-800 rounded-xl'>
                        </input>
                        <button id='footer-button' className='mx-1 w-[50px] h-[50px] text-white bg-radial-[at_25%_25%] from-[#573084] to-[#241748] to-75%'>
                            <MdArrowForwardIos />
                        </button>
                    </div>
                </div>
                <div className="border-red-600 border-solid col-span-2 md:col-span-1 border-2"></div>
                <div className="border-green-600 border-solid col-span-2 md:col-span-1 border-2"></div>
            </div>
            <div>
            <h1>Lower Container</h1>
            </div>


        </div>
    )
}

export default Footer;