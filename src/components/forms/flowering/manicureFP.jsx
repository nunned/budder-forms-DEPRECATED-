import "../template_form.css";
import Form_header from "../form-comps/form_header";
import { useState } from "react";
import AutoComplete from "../../AutoComplete";
import WeightComp from "../form-comps/WeightComp";
import DatePicker from "../form-comps/datepicker";

function ManicureFP() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeNote, setActiveNote] = useState("");

  const [mode, setMode] = useState("single");

  const [formData, setFormData] = useState({
    sourceTag: "",
    harvestName: "",
    weight: "",
    dryingLocation: "",
    manicureDate: "",
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const wrapNote = (note) => {
    return note.split("").reduce((acc, char, idx) => {
      if (idx % 50 === 0 && idx !== 0) {
        return acc + "\n" + char;
      }
      return acc + char;
    }, "");
  };

  const handleNoteSubmit = (noteName) => {
    const wrappedNote = wrapNote(formData[noteName]);
    setFormData((prev) => ({ ...prev, [noteName]: wrappedNote }));
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
        <Form_header text="Manicure Flowering Plants" />
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="itm-list">
              <div className="itm-container toggle-container">
                <label>
                  <input
                    type="radio"
                    value="single"
                    checked={mode === "single"}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Single
                </label>
                <label>
                  <input
                    type="radio"
                    value="multi"
                    checked={mode === "multi"}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Multi
                </label>
              </div>

              <div className="itm-container">
                <p>Source Tag</p>
                <AutoComplete
                  options={sourceTags}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      sourceTag: selectedValue,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>Harvest Name</p>
                <input
                  type="text"
                  name="harvestName"
                  placeholder="Click to add notes..."
                  value={formData.harvestName}
                  onClick={() => {
                    setShowOverlay(true);
                    setActiveNote("harvestName");
                  }}
                  readOnly
                />
              </div>
              {showOverlay && (
                <div className="overlay">
                  <textarea
                    value={formData[activeNote]}
                    onChange={handleChange}
                    name={activeNote}
                    rows="5"
                    cols="30"
                  ></textarea>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      handleNoteSubmit(activeNote);
                      setShowOverlay(false);
                    }}
                  >
                    Done
                  </button>
                </div>
              )}
              <div className="itm-container">
                <p>Weight</p>
                <WeightComp
                  onChange={(data) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      weight: data,
                    }));
                  }}
                />
              </div>
              <div className="itm-container">
                <p>Drying Location</p>
                <AutoComplete
                  options={locations}
                  onChange={(selectedValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      dryingLocation: selectedValue,
                    }));
                  }}
                />
              </div>
              <DatePicker
                dateTitle="Manicure Date"
                onChange={handleChange}
                name="manicureDate"
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

export default ManicureFP;
