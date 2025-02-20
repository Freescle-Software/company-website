import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../../components/Carousel";

const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
];

const Clients = () => {
    const settings = {
        infinite: true,        // Infinite loop
        speed: 1000,           // Transition speed (1s)
        slidesToShow: 3,       // Show 3 slides at a time
        slidesToScroll: 1,     // Scroll 1 slide at a time
        autoplay: true,        // Enable auto-scrolling
        autoplaySpeed: 2500,   // 2.5s per slide
        pauseOnHover: true,    // Pause on hover
        cssEase: "linear",     // Smooth animation
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 750, settings: { slidesToShow: 2 } },
            { breakpoint: 440, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="w-[100%] sm:max-w-4xl md:max-w-6xl md:mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-left">Our Clients</h2>
            {/* <Slider {...settings}>
                {clients.map((client, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center h-40 transform transition-all hover:scale-105">
                            <img src={client.logo} alt={client.name} className="h-20 w-auto" />
                        </div>
                    </div>
                ))}
            </Slider> */}
            <Carousel clients={clients} settings={settings} />
        </div>
    );
};

export default Clients;
