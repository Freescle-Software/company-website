import DropdownSelect from "./DropDownSelect"
import { FaPhone } from "react-icons/fa";
import image from "../../../assets/man-with-laptop-2.png";

const HeroSection = () => {
    return (
        <div className="w-full flex flex-col bg-amber-50 py-4">
            <div className="grid grid-cols-2 h-[400px] px-6">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl text-left font-bold text-gray-800">Now build your own software solutions right away</h1>
                        <p className="text-gray-500 text-left">
                            Develop high quality software solutions for your brand.<br />
                            Everything you need to scale your digital presence.
                        </p>
                        <button className="bg-blue-500 text-white px-4 w-36 py-2 rounded-lg ">Get Started</button>
                    </div>
                    <div className="flex flex-row gap-16 font-semibold">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                                <FaPhone className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700">Contact Base</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                                <FaPhone className="w-4 h-4" />
                            </div>
                            <span className="text-gray-700">Prepaid Mode</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center relative">
                    {/* Dashed Circle */}
                    <div className="absolute top-10 right-16 w-[440px] h-[440px] border-2 border-dashed border-gray-400 rounded-full"></div>

                    {/* Left Side Text (Happy Customers) */}
                    <div className="absolute left-8 top-1/3 transform -translate-y-1/2 text-center bg-white p-3 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold text-purple-600">10K+</p>
                        <p className="text-sm text-gray-500">Happy Customers</p>
                    </div>

                    {/* Image (Model) */}
                    <img src={image} alt="hero" className="w-96 h-full object-cover relative" />

                    {/* Right Side Text (Other Stat) */}
                    <div className="absolute right-8 top-2/3 transform -translate-y-1/2 text-center bg-white p-3 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold text-purple-600">500+</p>
                        <p className="text-sm text-gray-500">Projects Delivered</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between bg-amber-100 p-8 rounded-2xl z-99999">
                <DropdownSelect name="Select your work type" options={["Freelancer", "Client"]} multiSelect={true} />
                <div className="border-l-2 border-gray-300 mx-4"></div>
                <DropdownSelect name="Select your budget" options={["5-10k", "10-20k"]} multiSelect={true} />
                <div className="border-l-2 border-gray-300 mx-4"></div>
                <DropdownSelect name="Select your industry" options={["Restaurant", "Hospitality"]} multiSelect={true} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
        </div>
    )
}

export default HeroSection