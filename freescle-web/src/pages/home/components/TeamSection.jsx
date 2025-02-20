import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "John",
        role: "Co-founder & Creative Director",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        linkedin: "https://www.linkedin.com/in/johndoe",
        hobbies: ["Gamer", "Skateboarder"],
    },
    {
        name: "Jane",
        role: "Chief Technology Officer",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        linkedin: "https://www.linkedin.com/in/janesmith",
        hobbies: ["Hiker", "Photographer"],
    },
    {
        name: "Michael",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        linkedin: "https://www.linkedin.com/in/michaelbrown",
        hobbies: ["Cyclist", "Chess Player"],
    },
    {
        name: "John",
        role: "Co-founder & Creative Director",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        linkedin: "https://www.linkedin.com/in/johndoe",
        hobbies: ["Gamer", "Skateboarder"],
    },
    {
        name: "Jane",
        role: "Chief Technology Officer",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        linkedin: "https://www.linkedin.com/in/janesmith",
        hobbies: ["Hiker", "Photographer"],
    },
    {
        name: "Michael",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        linkedin: "https://www.linkedin.com/in/michaelbrown",
        hobbies: ["Cyclist", "Chess Player"],
    },
];

const Team = () => {
    return (
        <div className="w-full sm:max-w-4xl md:max-w-6xl md:mx-auto px-6 py-12 flex flex-col justify-center items-center overflow-x-hidden">
            {/* Section Heading */}
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-left">Meet Our Team</h2>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="w-[100%] sm:w-[80%] md:w-[100%] text-white p-6 flex flex-col items-center gap-8"
                    >
                        {/* Profile Image - Vertical Rectangle */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="relative w-full h-64 object-cover rounded-lg shadow-md"
                        />

                        {/* Name & LinkedIn */}

                        <div className="w-full">

                            <div className="flex justify-between w-full items-center mt-4">
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <FaLinkedin className="text-2xl" />
                            </div>

                            {/* Separator */}

                            <div className="w-full h-[1px] bg-gray-500 my-4"></div>

                            <div className="w-full text-left">
                                {/* Designation */}
                                <p className="text-gray-400 text-xs">{member.role}</p>

                                {/* Hobbies */}
                                <div className="mt-2">
                                    {member.hobbies.map((hobby, idx) => (
                                        <p key={idx} className="text-xs text-gray-300">
                                            {hobby}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
