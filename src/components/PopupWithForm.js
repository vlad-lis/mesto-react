function PopupWithForm(props) {
    return (
        <div
            className={`pop-up ${props.isOpen && 'pop-up_opened'}`}
            id={`${props.name}-pop-up`}>
            <div className="pop-up__content">
                <button
                    className="pop-up__close-button"
                    id={`${props.name}-popup-close-button`}
                    aria-label="close" 
                    type="button"
                    onClick={props.onClose}></button>
                <h3 className="pop-up__heading">{props.title}</h3>
                {props.children}
            </div>
        </div>
    )
};

export default PopupWithForm;