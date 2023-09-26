import chatlogo from "../../../assets/chatlogo.png";
import PropTypes from "prop-types";
import minimize from "../../../assets/minimize.svg";
import "./form_header.css";

const Form_header = ({ text = "bot" }) => {
  return (
    <div className="wrap">
      <div className="form-top">
        <div className="top-top">
          <img src={chatlogo} alt="Chat Logo" className="form-logo" />
          <p className="budder">BUDDER</p>
        </div>
        <img src={minimize} alt="Minimize Icon" className="minimize" />
      </div>
      <div className="form-bot">{text}</div> {/* Render the passed text prop */}
    </div>
  );
};

Form_header.propTypes = {
  text: PropTypes.string,
};

export default Form_header;
