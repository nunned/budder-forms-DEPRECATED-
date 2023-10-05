import CustomDropdown from "./CustomDropdown";
import "../template_form.css";
import "./strain-comp.css";
import PropTypes from "prop-types";

function StrainComp({ itemNumber, onDataChange }) {
  const handleDataChange = (name, value) => {
    onDataChange(itemNumber, { [name]: value });
  };

  const handleUnitChange = (value) => {
    handleDataChange("testingStatus", value);
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
          onChange={(e) => handleDataChange("strainName", e.target.value)}
        />
      </div>
      <div className="itm-container">
        <p>Testing Status</p>
        <CustomDropdown
          options={testingStatuses}
          name="testingStatus"
          onChange={handleUnitChange}
        />
      </div>
      <div className="itm-container horizontal-container">
        <div className="input-group">
          <p>THC</p>
          <input
            type="text"
            name="thcContent"
            placeholder=""
            onChange={(e) => handleDataChange("thcContent", e.target.value)}
          />
        </div>
        <div className="input-group">
          <p>CBD</p>
          <input
            type="text"
            name="cbdContent"
            placeholder=""
            onChange={(e) => handleDataChange("cbdContent", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

StrainComp.propTypes = {
  itemNumber: PropTypes.number.isRequired,
  onDataChange: PropTypes.func.isRequired,
};

export default StrainComp;
