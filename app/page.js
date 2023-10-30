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

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div>
      <div>
        {tickets &&
          uniqueCategories?.map((thisCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h2>{thisCategory}</h2>
              <div className="md:grid-cols-2 lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === thisCategory)
                  .map((thisTicket, ticketId) => (
                    <TicketCard key={ticketId} ticket={thisTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
