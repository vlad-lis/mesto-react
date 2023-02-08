import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            button='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}>
            <label className="pop-up__label">
                <input className="pop-up__input pop-up__input_type_image-link" id="avatar-url-input" type="url"
                    name="avatar" placeholder="Ссылка на аватар" required></input>
                <span className="pop-up__input-error avatar-url-input-error"></span>
            </label>
        </PopupWithForm>
    )
};

export default EditAvatarPopup;