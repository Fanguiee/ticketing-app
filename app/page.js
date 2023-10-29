import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets/", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets.", error);
  }
};

const Home = async () => {
  const { tickets } = await getTickets();
  return tickets.map((ticket) => (
    <div key={ticket._id}>
      <TicketCard ticket={ticket} />
    </div>
  ));
};

export default Home;
