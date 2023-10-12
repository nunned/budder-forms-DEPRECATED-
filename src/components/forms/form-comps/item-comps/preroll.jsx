import { useState } from "react";
import PropTypes from "prop-types";
import "../../template_form.css";
import CustomDropdown from "../../form-comps/CustomDropdown";
import WeightComp from "../WeightComp";
import AutoComplete from "../../../AutoComplete";

const PreRoll = ({ onDataChange }) => {
  const unitOM = ["Grams", "Kilograms", "Milligrams", "Ounces", "Pounds"];
  const strains = ["Apple Fritter", "RAW", "Forum", "Runtz"];

  const [formData, setFormData] = useState({
    unitOfMeasure: "",
    strain: "",
    weight: "",
    weightUnit: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onDataChange(name, value); // You might want to pass the entire formData object if necessary
  };

  const handleWeightChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      weight: data.weight,
      weightUnit: data.unit,
    }));
    onDataChange("weight", data.weight);
    onDataChange("weightUnit", data.unit);
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
      <div className="itm-container">
        <p>Unit Weight</p> 
        <WeightComp options={unitOM} onChange={handleWeightChange} />
      </div>
    </div>
  );
};

PreRoll.propTypes = {
  onDataChange: PropTypes.func.isRequired,
};

export default PreRoll;
