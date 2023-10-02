import "../template_form.css";
import AutoComplete from "../../AutoComplete";
import PropTypes from "prop-types";

function PlantNumComp({ onDataChange }) {
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

  const trimmedSourceTags = sourceTags.map((tag) => tag.slice(-8));

  return (
    <div className="itm-container">
      <p>Plant Num</p>
      <AutoComplete
        options={trimmedSourceTags}
        onChange={(selectedValue) => {
          onDataChange({ sourceTag: selectedValue }); // Notify parent component directly here
        }}
      />
    </div>
  );
}

PlantNumComp.propTypes = {
  onDataChange: PropTypes.func.isRequired,
};

export default PlantNumComp;
