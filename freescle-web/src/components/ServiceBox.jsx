import React from "react";

const ServiceBox = ({ name, icon }) => {
    return (
        <div className="relative flex items-center justify-between bg-gray-100 rounded-lg py-6 px-2 shadow-lg overflow-hidden w-[80%] sm:w-[80%] md:w-[90%] ">
            {/* Left Side - Service Name */}
            <span className="text-xl font-semibold text-gray-800">{name}</span>

            {/* Right Side - Semi-circle with Icon */}
            <div className="relative w-20 h-10 flex items-right justify-center">
                {/* Semi-circle */}
                <div className="absolute w-20 h-20 bg-white pl-6 rounded-l-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 shadow-lg"></div>
                {/* Icon */}
                <div className="relative z-10 text-4xl text-blue-600">{icon}</div>
            </div>
        </div>
    );
};

export default ServiceBox;
