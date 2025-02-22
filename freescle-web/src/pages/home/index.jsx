import Services from './components/Services'
import Clients from './components/Clients'
import Testimonial from './components/Testimonials'
import Team from './components/TeamSection'
import ToolboxSection from './components/Toolbox'
import HeroSection from "./components/HeroSection.jsx";

const home = () => {
    return (
        <div className="max-w-[350px] sm:max-w-full md:max-w-6xl flex flex-col justify-center items-center overflow-hidden mt-12">
            <HeroSection/>
            <Services />
            <Clients />
            <Testimonial />
            <Team />
            {/*<ToolboxSection />*/}
        </div>
    )
}

export default home