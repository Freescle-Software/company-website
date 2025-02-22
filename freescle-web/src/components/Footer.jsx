import { MdArrowForwardIos } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaRegEnvelope, FaPhoneAlt  } from "react-icons/fa";
import { FaSquareXTwitter, FaEnvelope } from "react-icons/fa6";
import {useState} from "react";

const Footer = () => {
    const [Message, setMessage] = useState("");
    const [Email, setEmail] = useState("");
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className=" h-auto md:h-full w-[100%] md:max-w-6xl *:m-2 bottom-0 p-3 text-white">
            <div className="h-[70%] border-gray-600 grid grid-cols-2 md:grid-cols-4 border-solid border-y-2 p-3">
                <div className="flex flex-col  col-1 col-span-2">
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
                    <div className="flex flex-col md:flex-row *:mt-2 items-center md:items-center md:mx-8 p-1 md:text-left">
                        <input type="text" placeholder="Your Email ID" value={Email} onChange={handleEmailChange}
                               className='w-[95%] md:w-[60%] ml-2 placeholder:text-slate-400 text-slate-800 rounded-xl'>
                        </input>
                        <input type="text" placeholder="Message..." value={Message} onChange={handleMessage}
                               className='w-[95%] md:w-[60%] ml-2 placeholder:text-slate-400 text-slate-800 rounded-xl'>
                        </input>
                        <button id='footer-button'
                                className='mx-1 w-[50%] md:w-[50px] md:h-[50px] rounded-xl md:rounded-full flex items-center justify-center text-white bg-radial-[at_25%_25%] from-[#573084] to-[#241748] to-75%'>
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    <div className="flex flex-row justify-evenly *:text-left md:items-center text-3xl md:mx-8 p-2 text-left *:mt-2 md:text-4xl">
                        <FaInstagram />
                        <FaFacebookSquare />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                <div className="flex justify-center mt-8 *:px-3 right-6 col-span-2 md:col-span-1">
                    <ul className="text-left">
                        <li className="mb-2">INFO</li>
                        <li>Services</li>
                        <li>Program</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="text-left">
                        <li className="mb-2">WORK</li>
                        <li>Ui/Ux</li>
                        <li>Web Services</li>
                        <li>GenAI</li>
                        <li>Cloud</li>
                        <li>AI/ML</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center text-left *:w-full mt-8 mx-3 col-span-2 md:col-span-1 text-left col-span-2">
                    <p>Get In Touch</p>
                    <div className="flex m-4 w-auto h-auto">
                        <FaRegEnvelope  className="w-auto h-auto text-xl" />
                        <p className="mx-2">freescle.info@gmail.com</p>
                    </div>
                    <div className="flex m-4 w-auto h-auto">
                        <FaPhoneAlt className="w-auto h-auto text-xl"/>
                        <p className="mx-2">+91-9510112284</p>
                    </div>

                </div>
            </div>
            <div className="h-auto py-4 *:py-2 rounded-xl bg-[#573084] flex flex-col md:flex-row justify-between items-center">
                <p className="px-4">Copyright &copy; Freescle Software</p>
                <div className="flex *:px-4 items-center">
                    <p>Terms & Condition</p>
                    <p className="border-x-2 border-solid border-slate-400">Privacy Policy</p>
                    <p>Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;