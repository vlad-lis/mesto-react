function Card(props) {
    function handleClick() {
        /* console.log(props.card); */
        props.onCardClick(props.card);
    };

    return (
        <div className="element">
            <button className="element__delete-button" aria-label="delete" type="button"></button>
            <img
                className="element__image"
                src={props.card.link}
                onClick={handleClick}
                alt={props.card.name}></img>
            <h3 className="element__heading">{props.card.name}</h3>
            <div className="element__like-container">
                <button className="element__like-button" aria-label="like" type="button"></button>
                <p className="element__like-counter">{props.card.likes.length}</p>
            </div>
        </div>
    );
};

export default Card;