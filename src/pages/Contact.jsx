import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email.includes("@") || email.length < 5) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit Inquiry</button>
      </form>
      {status && <p className="status-msg">{status}</p>}
    </div>
  );
};
export default Contact;
