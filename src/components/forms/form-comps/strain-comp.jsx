import CustomDropdown from "./CustomDropdown";
import { useState, useEffect } from "react";
import "../template_form.css";
import "./strain-comp.css";
import PropTypes from "prop-types";
import Percentages from "../form-comps/percentages";

function StrainComp({ itemNumber, onDataChange }) {
  const [strainData, setStrainData] = useState({
    strainName: "",
    testingStatus: "",
    thcContent: "",
    cbdContent: "",
  });

  const handleIndicaChange = (newIndica) => {
    setStrainData((prevData) => ({
      ...prevData,
      indicaPercentage: newIndica,
      sativaPercentage: 100 - newIndica,
    }));
  };

  const handleSativaChange = (newSativa) => {
    setStrainData((prevData) => ({
      ...prevData,
      sativaPercentage: newSativa,
      indicaPercentage: 100 - newSativa,
    }));
  };

  useEffect(() => {
    onDataChange(itemNumber, strainData);
  }, [strainData, itemNumber, onDataChange]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStrainData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const testingStatuses = ["None", "In-House", "Third-Party"];
  return (
    <div className="itm-container strain-comp">
      <div className="itm-container">
        <p>Strain Name #{itemNumber}</p>
        <input
          type="text"
          name="strainName"
          placeholder="Enter strain name..."
          onChange={handleChange} 
        />
      </div>
      <div className="itm-container">
        <p>Testing Status</p>
        <CustomDropdown
          options={testingStatuses}
          name="testingStatus"
          onChange={handleChange} 
        />
      </div>
      <div className="itm-container">
        <div className="input-group">
          <p className="custom-strain-header">THC</p>
          <input
            type="text"
            name="thcContent"
            placeholder=""
            onChange={handleChange} 
          />
        </div>
        <div className="input-group">
          <p className="custom-strain-header">CBD</p>
          <input
            type="text"
            name="cbdContent"
            placeholder=""
            onChange={handleChange} 
          />
        </div>
      </div>
      <div className="itm-container">
        <Percentages
          onIndicaChange={handleIndicaChange}
          onSativaChange={handleSativaChange}
        />
      </div>
    </div>
  );
}

StrainComp.propTypes = {
  itemNumber: PropTypes.number.isRequired,
  onDataChange: PropTypes.func.isRequired,
};

export default StrainComp;
