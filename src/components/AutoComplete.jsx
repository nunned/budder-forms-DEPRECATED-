import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./AutoComplete.css";

const AutoComplete = ({ options = ["Oranges", "Apples", "Pearls"], onChange }) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
    if (onChange) {
      onChange(suggestion);
    }
  };

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleSuggestionClick(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AutoComplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default AutoComplete;
