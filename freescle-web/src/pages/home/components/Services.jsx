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
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-left">Our Services</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceBox key={index} name={service.name} icon={service.icon} />
                ))}
            </div>
        </div>
    );
}

export default Services;
