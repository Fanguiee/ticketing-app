import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 }); //status 500 means it failed
  }
}
