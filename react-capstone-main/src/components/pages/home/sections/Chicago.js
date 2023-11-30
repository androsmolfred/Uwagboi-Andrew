
import Owners from '../../../../images/Mario and Adrian A.jpg';
import Restaurant from '../../../../images/restaurant.jpg';


function Chicago() {
    return (
      <article>
        <section className="chicago">
            <section className="locationText">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Quis Lorem aute nostrud laboris magna irure consectetur. Lorem in minim et minim qui. Id aliqua voluptate veniam voluptate. Anim est eu ex esse nisi pariatur dolore incididunt pariatur fugiat voluptate consequat. Pariatur incididunt do non enim non laboris deserunt eu labore tempor fugiat dolor. Labore quis irure pariatur et aliqua sunt in voluptate consequat in pariatur proident.</p>
            </section>
            <section className="locationImgs">
              <img src={Restaurant} alt="Restaurant"/>
              <img src={Owners} alt="Owners"/>
            </section>
          </section>
      </article>
    );
  }

export default Chicago;
