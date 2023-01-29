import {useEffect, useState} from "react";

export default function Dropdown(props) {
    const options = props.options;
    const id = props.id;
    const title = props.title;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select an option");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.className !== 'dropdown__input' && event.target.className !== 'dropdown__option') {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (<div className={"dropdown " + id}>
        <label htmlFor={id}>{title}</label>
        <input
            type="text"
            value={selectedOption}
            onClick={handleClick}
            readOnly
            className="dropdown__input"/>
        {isOpen && (<div className="dropdown__options">
            {options.map((option) => (<div
                key={option}
                className="dropdown__option"
                onClick={() => handleOptionClick(option)}>
                {option}
            </div>))}
        </div>)}
    </div>)
}