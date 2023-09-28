import "../template_form.css";
import Form_header from "../folder-comp/form_header";
import { useState } from "react";
import AutoComplete from "../../AutoComplete";
import DatePicker from "../folder-comp/datepicker";

function ChangePBLocation() {
  const [formData, setFormData] = useState({
    plantGroupName: "",
    newLocation: "",
    moveDate: "",
  });

  //These need to be made dynamic
  const plantBatches = ["Plant Batch #1", "Plant Batch #2", "Plant Batch #3"];

  const locations = ["BREEDING", "CLONE", "DRYING", "MOTHER", "VEGETATIVE"];

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Push formData to your backend
    console.log(formData);

    const newWindow = window.open("", "_blank");
    newWindow.document.write(`<pre>${JSON.stringify(formData, null, 2)}</pre>`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-wrap">
      <div className="form-container">
        <Form_header text="Change Plant Batches Location" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container">
                <p>Group Name</p>
                <AutoComplete
                  options={plantBatches}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      plantGroupName: selectedValue,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>New Location</p>
                <AutoComplete
                  options={locations}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      newLocation: selectedValue,
                    }));
                  }}
                />
              </div>
              <DatePicker dateTitle="Move Date" onChange={handleChange} name="moveDate" />
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

export default ChangePBLocation;
