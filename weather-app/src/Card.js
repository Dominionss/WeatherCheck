import "./Card.css";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Card({title, info}) {
    return (
        <div className="Card">
            <h2>{ title }</h2>
            <h3>Info: { info }</h3>
            <h3>{getRandomIntInclusive(1, 100)}</h3>
        </div>
    );
}

export default Card;
