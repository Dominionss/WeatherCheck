import "./Card.css";

function Card({title, info}) {
    return (
        <div className="Card">
            <h2>{ title }</h2>
            <h3>Info: { info }</h3>
        </div>
    );
}

export default Card;
