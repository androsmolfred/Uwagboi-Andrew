import {Link} from 'react-router-dom';

function SpecialsCard(props) {
    return (
        <article className="special-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="special-card-content">
                <h3>{props.name}</h3>
                <pre>{props.price}</pre>
                <p>{props.description}</p>
                <Link className="special-card-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}
export default SpecialsCard 