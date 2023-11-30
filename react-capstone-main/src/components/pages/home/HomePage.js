import CustomersSay from "./sections/CustomersSay";
import CallToAction from "./sections/CallToAction";
import Chicago from "./sections/Chicago";
import Specials from "./sections/Specials";


function HomePage() {
    return (
     <>
        <CallToAction></CallToAction>
        <Specials/>
        <CustomersSay/>
        <Chicago></Chicago>
      </>
    );
  }

export default HomePage;
