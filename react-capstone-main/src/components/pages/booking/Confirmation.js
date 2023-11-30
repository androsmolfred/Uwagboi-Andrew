
import Cheers from '../../../images/cheers.png';
import { Link } from "react-router-dom";
export default function ConfirmedBooking() {
  return (
    <header className="confirmationHeader">
      <img
        className="confirmationImage"
        src={Cheers}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

     
    </header>
  );
}
