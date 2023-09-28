import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import "../template_form.css";
import PropTypes from 'prop-types';

function WeightComp({ onChange }) {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState(null);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    if (onChange) onChange({ weight: event.target.value, unit });
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    if (onChange) onChange({ weight, unit: event.target.value });
  };

  return (
    <div className="itm-container weight-comp">
      <input
        type="number"
        value={weight}
        onChange={handleWeightChange}
        className="weight-input"
        placeholder="Weight"
      />
      <CustomDropdown
        options={["kg", "lb", "oz"]}
        name="unit"
        onChange={handleUnitChange}
      />
    </div>
  );
}

WeightComp.propTypes = {
  onChange: PropTypes.func,
};

export default WeightComp;
