import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup() {
    return (
        <PopupWithForm name='delete' title='Вы уверены?'>
            <form className="pop-up__form" id="card-deletion-form" name="deletion-form" noValidate>
                <button className="pop-up__save-button" id="delete-popup-save-button" type="submit">Да</button>
            </form>
        </PopupWithForm>
    )
};

export default DeleteCardPopup;