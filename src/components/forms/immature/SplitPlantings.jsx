import "../template_form.css";
import Form_header from "../folder-comp/form_header";
import CustomDropdown from "../folder-comp/CustomDropdown";
import { useState } from "react";
import DatePicker from "../folder-comp/datepicker";
import AutoComplete from "../../AutoComplete";

function SplitPlantings() {
  const [formData, setFormData] = useState({
    groupNames: "",
    newGroupName: "",
    dropdownValue: "",
    plantCount: "",
    strain: "",
    dateValue: "",
    location: "",
  });

  //These need to be made dynamic
  const strains = ["Apple Fritter", "RAW", "Forum", "Runtz"];

  const groupNames = ["B. Kush 5-30", "A. Kush 20-40", "C. Kush 80-160"];

  const locations = ["BREEDING", "CLONE", "DRYING", "MOTHER", "VEGETATIVE"];

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
        <Form_header text="Split Plantings" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container">
                <p>Group Name</p>
                <AutoComplete
                  options={groupNames}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      groupName: selectedValue,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>New Group Name</p>
                <input
                  type="text"
                  name="newGroupName"
                  placeholder="ex. B. Kush 5-30"
                  value={formData.newGroupName}
                  onChange={handleChange}
                />
              </div>
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
              <div className="itm-container">
                <p>Location</p>
                <AutoComplete
                  options={locations}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      location: selectedValue,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>Strain</p>
                <AutoComplete
                  options={strains}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      strain: selectedValue,
                    }));
                  }}
                />
              </div>
              <DatePicker onChange={handleChange} />
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

export default SplitPlantings;
