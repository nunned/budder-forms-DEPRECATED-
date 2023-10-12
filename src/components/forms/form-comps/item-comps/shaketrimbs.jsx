import { useState } from "react";
import PropTypes from "prop-types";
import "../../template_form.css";
import CustomDropdown from "../../form-comps/CustomDropdown";
import AutoComplete from "../../../AutoComplete";

const ShakeTrimByStrain = ({ onDataChange }) => {
  const unitOM = ["Grams", "Kilograms", "Milligrams", "Ounces", "Pounds"];
  const strains = ["Apple Fritter", "RAW", "Forum", "Runtz"];

  const [formData, setFormData] = useState({
    unitOfMeasure: "",
    strain: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onDataChange(name, value); // You might want to pass the entire formData object if necessary
  };

  return (
    <div className="itm-container">
      <div className="itm-container">
        <CustomDropdown
          text="Unit of Measure"
          options={unitOM}
          name="unitOfMeasure"
          onChange={handleChange} // Ensure CustomDropdown calls onChange with event object
        />
      </div>
      <div className="itm-container">
        <p>Strain</p>
        <AutoComplete
          options={strains}
          onChange={(selectedValue) => handleChange("strain", selectedValue)}
        />
      </div>
    </div>
  );
};

ShakeTrimByStrain.propTypes = {
  onDataChange: PropTypes.func.isRequired,
};

export default ShakeTrimByStrain;
