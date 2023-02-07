import { useEffect, useState } from 'react';
import addButton from '../images/add-button.svg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getDefaultCards()])
            .then(([info, cards]) => {
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar)
                setCards(cards)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile-container">
                    <div
                        className="profile__avatar"
                        onClick={props.onEditAvatar}
                        style={{ backgroundImage: `url(${userAvatar})` }}>
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-info__name">{userName}</h1>
                        <button
                            className="profile-info__edit-button"
                            aria-label="edit"
                            type="button"
                            onClick={props.onEditProfile}>
                        </button>
                        <p className="profile-info__description">{userDescription}</p>
                    </div>
                </div>
                <button
                    className="profile__add-button"
                    aria-label="add"
                    type="button"
                    onClick={props.onAddPlace}>
                    <img className="profile__add-button-image" src={addButton} alt="Добавить"></img>
                </button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((newCard) => {
                        return (
                            <Card 
                            card={newCard}
                            key={newCard._id}
                            onCardClick={props.onCardClick}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;