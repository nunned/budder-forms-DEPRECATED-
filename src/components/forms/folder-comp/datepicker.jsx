import { useState } from "react";
import PropTypes from "prop-types";
import "./datepicker.css";

function DatePicker({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Adding a name property to the event object here
    onChange({ target: { value: event.target.value, name: "dateValue" } });
  };

  const selectToday = () => {
    const today = new Date().toISOString().split("T")[0]; // Gets the date in "YYYY-MM-DD" format
    setSelectedDate(today);
    // Adding a name property to the event object here
    onChange({ target: { value: today, name: "dateValue" } });
    setIsOpen(false);
  };

  return (
    <div className="date-picker">
      <div className="date-title">Planting Date</div>
      <div className="date-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedDate || "Select Date"}
      </div>
      {isOpen && (
        <div className="date-options">
          <button onClick={selectToday}>Today</button>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
      )}
    </div>
  );
}


DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
