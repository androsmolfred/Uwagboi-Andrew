
import Review from '../../../../images/star.png';

function CustomersSayCard(props) {
    return (
        <article className="customersSayCard">
            <img src={Review} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default CustomersSayCard;