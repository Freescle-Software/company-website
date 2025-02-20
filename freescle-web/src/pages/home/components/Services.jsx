import { FaCode, FaMobileAlt, FaCloud, FaCogs, FaLock, FaChartLine, FaRobot, FaDatabase } from "react-icons/fa";
import ServiceBox from "../../../components/ServiceBox";

const services = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "Mobile App Development", icon: <FaMobileAlt /> },
    { name: "Cloud Solutions", icon: <FaCloud /> },
    { name: "DevOps & Automation", icon: <FaCogs /> },
    { name: "Cybersecurity", icon: <FaLock /> },
    { name: "Data Analytics", icon: <FaChartLine /> },
    { name: "AI & Machine Learning", icon: <FaRobot /> },
    { name: "Database Management", icon: <FaDatabase /> },
];

function Services() {
    return (
        <div className="w-full sm:max-w-4xl md:max-w-6xl md:mx-auto  px-6 py-12">
            <h2 className=" text-5xl md:text-3xl font-bold text-center mb-8 md:text-left ">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-6">
                {services.map((service, index) => (
                    <ServiceBox key={index} name={service.name} icon={service.icon} />
                ))}
            </div>
        </div>
    );
}

export default Services;
