import React from "react";
import TicketBookingForm from "../components/TicketBookingForm";

const ShowDetails = ({ show, onBookTicket }) => {
  const handleTicketSubmit = (showName, name, email) => {};

  return (
    <div>
      <h2 className="showDetailsHeading">Show Details</h2>
      <h3 className="showSummary">{show.name}</h3>
      <div className="showDetailsHeading">
        {show.image && <img src={show.image.medium} alt={show.name} />}
      </div>
      <p className="showSummary">{show.summary}</p>
      {/* PLEASE IGNORE <P></P> TAGS IN SUMMARY IT IS ALREADY IN API'S DATA  */}
      <TicketBookingForm
        showName={show.name}
        onTicketSubmit={handleTicketSubmit}
      />
    </div>
  );
};

export default ShowDetails;
