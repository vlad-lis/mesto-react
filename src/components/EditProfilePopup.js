import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            button='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}>
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
        </PopupWithForm>
    )
};

export default EditProfilePopup;