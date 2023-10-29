import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Ticket by id ${id} .`);
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? true : false; //Tickecpage/new or TicketPage/123?

  if (EDITMODE) {
    updateTicketData = {
      _id: "new",
    };
  } else {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
