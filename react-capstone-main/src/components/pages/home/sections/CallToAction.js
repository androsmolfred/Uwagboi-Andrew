import callToActionImage from "../../../../images/restauranfood.jpg";
import {Link} from 'react-router-dom';

function CallToAction(props) {
    return (
      <article>
        <section className="callToAction">
              <section className="callToActionText">
                  <h1>Little Lemon</h1>
                  <h2>Chicago</h2>
                  <p>Et consectetur aliquip qui aute duis. Laboris est fugiat laboris cillum ad fugiat minim dolor nisi nisi.
                  Commodo ipsum pariatur qui ipsum ex velit excepteur sit quis dolor consectetur et minim.</p>
                  <br/>
                  <Link role="button" className="action-button" to="/reservations">Reserve a table</Link>
              </section>
              <section className="callToActionImage">
                  <img src={callToActionImage} alt="title-section-mage"/>
              </section>
         </section>
      </article>
    );
  }

export default CallToAction;
