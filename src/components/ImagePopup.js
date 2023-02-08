function ImagePopup(props) {
    return (
        <div className={`pop-up preview ${props.card && 'pop-up_opened'}`} id="preview-pop-up">
            <div className="pop-up__preview">
                <button className="pop-up__close-button" id="preview-popup-close-button" aria-label="close"
                    type="button" onClick={props.onClose}></button>
                <img
                    className="pop-up__image-preview"
                    src={props.card?.link}
                    alt={props.card?.name}></img>
                <h3 className="pop-up__image-heading">
                    {props.card?.name}
                </h3>
            </div>
        </div>
    )
};

export default ImagePopup;