import "../template_form.css";
import Form_header from "../folder-comp/form_header";
import CustomDropdown from "../folder-comp/CustomDropdown";
import { useState } from "react";
import DatePicker from "../folder-comp/datepicker";

function CreatePlantings() {
  const [formData, setFormData] = useState({
    groupName: "",
    dropdownValue: "",
    plantCount: "",
    strain: "",
    dateValue: "",
    location: "",
  });

  const [suggestion, setSuggestion] = useState("");
  //These need to be made dynamic
  const strains = ["StrainA", "bar", "StrainC"]; // Add more strains as necessary

  const locations = ["MOTHERSHIP", "VZN", "Vegytables"];

  const handleStrainChange = (event) => {
    const value = event.target.value;
    const foundStrain = strains.find((strain) =>
      strain.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestion(foundStrain ? foundStrain.substring(value.length) : "");
    handleChange(event);
  };

  const handleLocChange = (event) => {
    const value = event.target.value;
    const foundLoc = locations.find((tag) =>
      tag.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestion(foundLoc ? foundLoc.substring(value.length) : "");
    handleChange(event);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Push formData to your backend
    console.log(formData);

    const newWindow = window.open("", "_blank");
    newWindow.document.write(`<pre>${JSON.stringify(formData, null, 2)}</pre>`);
  };

  return (
    <div className="form-wrap">
      <div className="form-container">
        <Form_header text="Create Plantings" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container">
                <p>Group Name</p>
                <input
                  type="text"
                  name="groupName"
                  placeholder="ex. B. Kush 5-30"
                  value={formData.groupName}
                  onChange={handleChange}
                />
              </div>
              <>
                <CustomDropdown
                  text="Plants Type"
                  options={["Clone", "Seed"]}
                  name="dropdownValue"
                  onChange={handleChange}
                />
              </>
              <div className="itm-container">
                <p>Plants Count</p>
                <input
                  type="text"
                  name="plantCount"
                  placeholder="ex. 100"
                  value={formData.plantCount}
                  onChange={handleChange}
                />
              </div>
              <div className="itm-container strain-input-container">
                <p>Strain</p>
                <input
                  type="text"
                  name="strain"
                  placeholder="ex. RAW"
                  value={formData.strain}
                  onChange={handleStrainChange}
                  className="user-input"
                />
                {formData.strain.length > 0 && suggestion && (
                  <div className="suggestions">
                    {formData.strain}
                    <strong>{suggestion}</strong>
                  </div>
                )}
              </div>
              <DatePicker onChange={handleChange} />
              <div className="itm-container strain-input-container">
                <p>Location</p>
                <input
                  type="text"
                  name="location"
                  placeholder="Type part of the Name"
                  value={formData.location}
                  onChange={handleLocChange}
                  className="user-input"
                />
                {formData.location.length > 0 && suggestion && (
                  <div className="suggestions">
                    {formData.location}
                    <strong>{suggestion}</strong>
                  </div>
                )}
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePlantings;
