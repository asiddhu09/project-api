import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  }, []);

  return (
    <div>
      <div className="heading1">HOMEPAGE</div>
      <h2 className="showListHeading">Show's Lists</h2>
      {shows.map((show) => (
        <div className="idList" key={show.show.id}>
          <h3>{show.show.name}</h3>
          {show.show.image && (
            <img src={show.show.image.medium} alt={show.show.name} />
          )}
          <div>
            <button
              className="showDetailsbtn"
              onClick={() => onSelectShow(show.show)}
            >
              Show Details and Summary
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
