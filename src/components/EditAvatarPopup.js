import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            isOpen={props.isOpen}
            onClose={props.onClose}>
            <form className="pop-up__form" id="avatar-form" name="input-form" noValidate>
                <label className="pop-up__label">
                    <input className="pop-up__input pop-up__input_type_image-link" id="avatar-url-input" type="url"
                        name="avatar" placeholder="Ссылка на аватар" required></input>
                    <span className="pop-up__input-error avatar-url-input-error"></span>
                </label>
                <button className="pop-up__save-button" id="edit-avatar-save-button" type="submit">Сохранить</button>
            </form>
        </PopupWithForm>
    )
};

export default EditAvatarPopup;