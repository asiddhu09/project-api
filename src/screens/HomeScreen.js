import React, { useState } from "react";
import ShowList from "../components/ShowList";
import ShowDetailsScreen from "./ShowDetailsScreen";

const HomeScreen = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (showName) => {
    // Implement the logic to open the form with the movie name and relevant details
    // You can use localStorage/sessionStorage to store the details
  };

  return (
    <div>
      {selectedShow ? (
        <ShowDetailsScreen
          show={selectedShow}
          onBookTicket={handleBookTicket}
          goBack={() => setSelectedShow(null)}
        />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
    </div>
  );
};

export default HomeScreen;
