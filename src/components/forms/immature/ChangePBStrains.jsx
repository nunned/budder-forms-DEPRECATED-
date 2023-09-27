import "../template_form.css";
import Form_header from "../folder-comp/form_header";
import { useState } from "react";
import AutoComplete from "../../AutoComplete";

function ChangePBStrains() {
  const [formData, setFormData] = useState({
    plantBatch: "",
    newStrain: "",
  });

  //These need to be made dynamic
  const plantBatches = ["Plant Batch #1", "Plant Batch #2", "Plant Batch #3"];

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
        <Form_header text="Change Plant Batches Strains" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container">
                <p>Plant Batch</p>
                <AutoComplete
                  options={plantBatches}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      plantBatch: selectedValue,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>New Strain</p>
                <input
                  type="text"
                  name="newStrain"
                  placeholder="ex. Bubba Kush"
                  value={formData.newStrain}
                  onChange={handleChange}
                />
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

export default ChangePBStrains;
