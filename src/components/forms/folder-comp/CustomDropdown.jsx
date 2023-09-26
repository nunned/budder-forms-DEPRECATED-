// CustomDropdown.js
import { useState } from "react";
import PropTypes from "prop-types";
import "./customDropdown.css";
import downarrow from "../../../assets/downarrow.svg";

function CustomDropdown({ options, name, onChange, text = "Dropdown" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="drop-header">{text}</div>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="selected-text">{selectedOption || "Select"}</span>
        <img src={downarrow} alt="" className="downarrow" />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomDropdown;
