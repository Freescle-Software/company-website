import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaMicrosoft, FaGoogle, FaAmazon } from "react-icons/fa";


const testimonials = [
    {
        companyLogo: <FaGoogle />,
        companyName: "Google",
        review: "This company has exceeded our expectations. Highly recommended!",
        rating: 4.5,
        clientName: "John Doe",
        designation: "Product Manager",
    },
    {
        companyLogo: <FaMicrosoft />,
        companyName: "Microsoft",
        review: "The team is extremely professional and delivers high-quality work!",
        rating: 5,
        clientName: "Jane Smith",
        designation: "CTO",
    },
    {
        companyLogo: <FaAmazon />,
        companyName: "Amazon",
        review: "Their attention to detail and innovation is outstanding.",
        rating: 4.8,
        clientName: "Michael Brown",
        designation: "Senior Developer",
    },
];

const stats = [
    { value: "45+", label: "Happy Customers" },
    { value: "5k+", label: "Hours spent on craft" },
    { value: "4.8", label: "Review Rate" },
];

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="w-full sm:max-w-4xl md:max-w-6xl md:mx-auto px-6 py-12">
            {/* Testimonials Carousel */}
            <h2 className="text-3xl text-white text-left font-bold text-center mb-8">What Our Clients Say</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4">
                        <div className="p-6 text-center flex flex-col items-center space-y-4">
                            <div className="flex flex-row items-center gap-2">
                                <div className="text-3xl">{testimonial.companyLogo}</div>
                                <h3 className="text-lg font-semibold">{testimonial.companyName}</h3>
                            </div>
                            <p>{testimonial.review}</p>
                            <div className="mt-4">
                                <div className="flex justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">
                                            {i < Math.floor(testimonial.rating) ? <FaStar /> : i < testimonial.rating ? <FaStarHalfAlt /> : null}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="font-sm text-gray-500 mt-2">{testimonial.clientName}</h4>
                                <p className="font-sm text-gray-200">{testimonial.designation}, {testimonial.companyName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Fading Separator Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"></div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 space-y-4">
                        <h3 className="text-4xl font-bold">{stat.value}</h3>
                        <p className="text-gray-200">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
