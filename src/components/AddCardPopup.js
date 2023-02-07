import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
    return (
        <PopupWithForm 
        name='add-card' 
        title='Новое место'
        isOpen={props.isOpen}
        onClose={props.onClose}>
            <form className="pop-up__form" id="card-form" name="input-form" noValidate>
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
                <button className="pop-up__save-button" id="add-card-save-button" type="submit">Создать</button>
            </form>
        </PopupWithForm>
    )
};

export default AddCardPopup;