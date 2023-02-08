import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
    return (
        <PopupWithForm
            name='add-card'
            title='Новое место'
            button='Создать'
            isOpen={props.isOpen}
            onClose={props.onClose}>
            <label className="pop-up__label">
                <input className="pop-up__input pop-up__input_type_name" id="card-name-input" type="text" name="name"
                    placeholder="Название" minLength="2" maxLength="30" required></input>
                <span className="pop-up__input-error card-name-input-error"></span>
            </label>
            <label className="pop-up__label">
                <input className="pop-up__input pop-up__input_type_image-link" id="card-url-input" type="url"
                    name="link" placeholder="Ссылка на картинку" required></input>
                <span className="pop-up__input-error card-url-input-error"></span>
            </label>
        </PopupWithForm>
    )
};

export default AddCardPopup;