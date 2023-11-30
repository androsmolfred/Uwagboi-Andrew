import { useReducer } from "react";
import { fetchAPI } from "../../../bookingApi";
import BookingForm from "./sections/BookingForm";


function BookingPage() {
    function updateTimes(date) {
      return fetchAPI(date);
    }
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
      <article>
         <section className="bookingTitle">
           <h1>Reserve a table</h1>
         </section>
         <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      </article>
    );
  }

export default BookingPage;
