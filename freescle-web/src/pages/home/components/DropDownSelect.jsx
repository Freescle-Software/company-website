import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const DropdownSelect = ({ name, options, multiSelect = false }) => {
    const [selected, setSelected] = useState(multiSelect ? [] : null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = (option) => {
        if (multiSelect) {
            setSelected((prev) =>
                prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
            );
        } else {
            setSelected(option);
            setIsOpen(false);
        }
    };

    const removeOption = (option) => {
        if (multiSelect) {
            setSelected((prev) => prev.filter((item) => item !== option));
        } else {
            setSelected(null);
        }
    };

    return (
        <div className="relative w-64">
            <div
                className="flex items-center justify-between p-2 border rounded-lg cursor-pointer bg-white shadow-sm "
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex gap-1 flex-wrap">
                    {multiSelect ? (
                        selected.length > 0 ? (
                            selected.map((opt) => (
                                <div key={opt} className="flex items-center bg-gray-800 px-2 py-1 rounded-md">
                                    {opt}
                                    <FaTimes className="w-4 h-4 ml-2 cursor-pointer" onClick={(e) => { e.stopPropagation(); removeOption(opt); }} />
                                </div>
                            ))
                        ) : (
                            <span className="text-gray-800">{name}</span>
                        )
                    ) : (
                        selected ? (
                            <div className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
                                {selected}
                                <FaTimes className="w-4 h-4 ml-2 cursor-pointer" onClick={(e) => { e.stopPropagation(); removeOption(selected); }} />
                            </div>
                        ) : (
                            <span className="text-gray-800">{name}</span>
                        )
                    )}
                </div>
                <FaChevronDown className="w-5 h-5 text-gray-500" />
            </div>
            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="p-2 text-gray-800 text-left hover:bg-gray-100 cursor-pointer"
                            onClick={() => toggleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownSelect;