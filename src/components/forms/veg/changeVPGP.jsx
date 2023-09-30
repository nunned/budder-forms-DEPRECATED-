import "../template_form.css";
import Form_header from "../form-comps/form_header";
import { useState } from "react";
import DatePicker from "../form-comps/datepicker";
import AutoComplete from "../../AutoComplete";

function ChangeVPGP() {
  const [formData, setFormData] = useState({
    sourceTag: "",
    newPhase: "flowering",
    newLocation: "",
    changeDate: "",
  });

  //These need to be made dynamic
  const sourceTags = [
    "1A40E0100019269000000074",
    "1A40E0100019269000000075",
    "1A40E0100019269000000076",
    "1A40E0100019269000000077",
    "1A40E0100019269000000078",
    "1A40E0100019269000000079",
    "1A40E0100019269000000080",
    "1A40E0100019269000000081",
    "1A40E0100019269000000082",
    "1A40E0100019269000000083",
  ];

  const locations = ["BREEDING", "CLONE", "DRYING", "MOTHER", "VEGETATIVE"];

  // temp solution
  const trimmedSourceTags = sourceTags.map((tag) => tag.slice(-8));

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
        <Form_header text="Change Vegetative Plants Growth Phase" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container custom-header">
                <p>Changing Phase to Flowering</p>
              </div>
              <div className="itm-container">
                <p>Source Tag</p>
                <AutoComplete
                  options={trimmedSourceTags}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      sourceTag: selectedValue,
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
              <DatePicker
                dateTitle="Change Date"
                onChange={handleChange}
                name="changeDate"
              />
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

export default ChangeVPGP;
