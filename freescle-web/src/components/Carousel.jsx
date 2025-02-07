import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ clients, settings }) => {
    return (
        <div>
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center h-40 transform transition-all hover:scale-105">
                            <img src={client.logo} alt={client.name} className="h-20 w-auto" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel