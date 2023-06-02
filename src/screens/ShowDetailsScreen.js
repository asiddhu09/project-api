import React from "react";
import ShowDetails from "../components/ShowDetails";

const ShowDetailsScreen = ({ show, onBookTicket, goBack }) => {
  return (
    <div>
      <button className="backbtn" onClick={goBack}>
        Go Back
      </button>
      <h2 className="heading2">
        This page will show , the details of the show you wants to see
      </h2>

      <ShowDetails show={show} onBookTicket={onBookTicket} />
    </div>
  );
};

export default ShowDetailsScreen;
