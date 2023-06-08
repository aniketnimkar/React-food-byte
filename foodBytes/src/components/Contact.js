import { useState } from "react";
import contact from "../components/assets/contactUs.png";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contact} alt=""></img>
      </div>
      <div className="contact-right">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required></input>
          <imput type="email" placeholder="Email" required></imput>
          <textarea placeholder="Type your Message here.." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting FoodByte, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
