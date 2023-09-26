import "../template_form.css";
import Form_header from "../folder-comp/form_header";
import { useState } from "react";
import DatePicker from "../folder-comp/datepicker";

function CreateImmPlantPackages() {
  const [formData, setFormData] = useState({
    groupName: "",
    newTag: "",
    dateValue: "",
    plantCount: "",
    strain: "",
  });

  const [suggestion, setSuggestion] = useState("");

  const groupNames = ["B. Kush 5-30", "A. Kush 20-40", "C. Kush 80-160"];

  const newTags = ["tag12312321", "tag123123232121", "tag1233112321"];

  const handleNameChange = (event) => {
    const value = event.target.value;
    const foundName = groupNames.find((groupName) =>
    groupName.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestion(foundName ? foundName.substring(value.length) : "");
    handleChange(event);
  };

  const handleTagChange = (event) => {
    const value = event.target.value;
    const foundTag = newTags.find((tag) =>
      tag.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestion(foundTag ? foundTag.substring(value.length) : "");
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
  };

  return (
    <div className="form-wrap">
      <div className="form-container">
        <Form_header text="Create Immature Plants Packages" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
            <div className="itm-container strain-input-container">
                <p>Group Name</p>
                <input
                  type="text"
                  name="groupName"
                  placeholder="Type Part of the Name"
                  value={formData.groupName}
                  onChange={handleNameChange}
                  className="user-input"
                />
                {formData.groupName.length > 0 && suggestion && (
                  <div className="suggestions">
                    {formData.groupName}
                    <strong>{suggestion}</strong>
                  </div>
                )}
              </div>
              <div className="itm-container strain-input-container">
                <p>New Tag</p>
                <input
                  type="text"
                  name="newTag"
                  placeholder="Type Part of the Name"
                  value={formData.newTag}
                  onChange={handleTagChange}
                  className="user-input"
                />
                {formData.newTag.length > 0 && suggestion && (
                  <div className="suggestions">
                    {formData.newTag}
                    <strong>{suggestion}</strong>
                  </div>
                )}
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
                <p>temp</p>
                <input
                  type="text"
                  name="strain"
                  placeholder="ex. B. Kush 5-30"
                  value={formData.strain}
                  onChange={handleChange}
                />
              </div>
              <DatePicker />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateImmPlantPackages;
