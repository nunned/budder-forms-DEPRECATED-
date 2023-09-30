import "../template_form.css";
import WeightComp from "./WeightComp";
import { useState } from "react";
import AutoComplete from "../../AutoComplete";

function PlantWasteComponent() {
  const [formData, setFormData] = useState({
    groupName: "",
    newPhase: "",
    newLocation: "",
    plantsCount: "",
    startingTag: "",
    endingTag: "",
    changeDate: "",
  });

  const wasteNums = [
    "0004471741",
    "0004471742",
    "0004471743",
    "0004471744",
    "0004471745",
    "0004471746",
    "0004471747",
    "0004471748",
    "0004471749",
    "0004471750",
  ];
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
    <div className="itm-container">
      <p>Plant Waste</p>
      <AutoComplete
        options={wasteNums}
        onChange={(selectedValue) => {
          setFormData((prevData) => ({
            ...prevData,
            sourceTag: selectedValue,
          }));
        }}
      />
      <WeightComp />
    </div>
  );
}

export default PlantWasteComponent;
