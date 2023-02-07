import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            isOpen={props.isOpen}
            onClose={props.onClose}>
            <form className="pop-up__form" id="profile-form" name="input-form" noValidate>
                <label className="pop-up__label">
                    <input className="pop-up__input pop-up__input_type_name" id="profile-name-input" type="text"
                        name="username" placeholder="Имя" minLength="2" maxLength="40" required></input>
                    <span className="pop-up__input-error profile-name-input-error"></span>
                </label>
                <label className="pop-up__label">
                    <input className="pop-up__input pop-up__input_type_job" id="profile-job-input" type="text"
                        name="userjob" placeholder="О себе" minLength="2" maxLength="200" required></input>
                    <span className="pop-up__input-error profile-job-input-error"></span>
                </label>
                <button className="pop-up__save-button" id="profile-form-save-button" type="submit">Сохранить</button>
            </form>
        </PopupWithForm>
    )
};

export default EditProfilePopup;