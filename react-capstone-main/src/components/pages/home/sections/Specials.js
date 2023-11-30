import { Link } from "react-router-dom";
import SpecialsCard from "./SpecialsCard";
import GreekSalad from '../../../../images/greek salad.jpg';
import Bruschetta from '../../../../images/bruchetta.svg';
import LemonDessert from '../../../../images/lemon dessert.jpg';

const cards = [{
  name: "Greek Salad",
  image: GreekSalad,
  price: "$12.99",
  description: "Feta Cheese, tomato, lettuce"
},{
  name: "Bruschetta",
  image: Bruschetta,
  price: "$16.99",
  description: "Bread, mango, green onions"
},{
  name: "Lemon Dessert",
  image: LemonDessert,
  price: "$8.50",
  description: "Lemon bread, vanilla Icing"
}
];

function Specials() {
    return (
      <article >
        <section className="specials">
            <br/>
            <br/>
            <section className="specials-title">
              <h1>This weeks specials!</h1>
              <Link className="action-button" to="/reservations">Online Menu</Link>
            </section>
            <section className="specials-list">
                { cards.map(card =>  <SpecialsCard key={card.name} {...card}/>) }
            </section>
        </section>
      </article>
    );
  }

export default Specials;
