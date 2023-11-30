import BookingPage from "./pages/booking/BookingPage";
import ConfirmedBooking from "./pages/booking/Confirmation";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";

function Main() {
    return (
    <main>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<BookingPage />} />
            { <Route path="/confirmation" element={<ConfirmedBooking/> } /> }
        </Routes>
    </main>
    );
  }

export default Main;
