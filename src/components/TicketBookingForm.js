import React, { useState } from "react";
import "../App.css";

const TicketBookingForm = ({ showName, onTicketSubmit }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTicketSubmit(name, email);
  };

  return (
    <div>
      <hr></hr>
      <h2 style={{ color: "red" }}>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="labels1" htmlFor="name">
            Name:
          </label>
          <input
            className="input1"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label className="labels1" htmlFor="email">
            Email:
          </label>
          <input
            className="input1"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button className="bookbtn" type="submit">
          Submit
        </button>
        <p style={{ color: "lightblue" }}>
          AFTER CLICKING THIS SUBMIT BUTTON USER DETAILS WILL BE SAVED IN LOCAL
          STORAGE
        </p>
      </form>
    </div>
  );
};

export default TicketBookingForm;
