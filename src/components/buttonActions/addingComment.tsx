import './commentForm.scss';
import '../GeneralStyle/Page.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import * as actions from '../features/commentSlicer';

type Props = {
  isActive: boolean,
  setIsActive: (isActive: boolean) => void,
}

export const AddingCommentForm: React.FC<Props> = ({ isActive, setIsActive }) => {

  const handleIsActive = () => {
    setIsActive(!isActive);
  }

  const dispatch = useAppDispatch();

  const [name, setName] = useState('');

  const [message, setMessage] = useState('');

  const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleMessageUpdate = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const generateUniqueId = (): string => {
    const timestamp = Date.now().toString(16);
    const randomNumber = Math.random().toString(16).slice(2);
    return `${timestamp}-${randomNumber}`;
  };

  const handleSubmitForm = () => {
    const newComment = {
      wineId: Number(generateUniqueId()),
      userFirstAndLastName: name,
      message: message,
      createdAt: new Date(),
    };

    // dispatch(actions.addComment(newComment)); эта часть кода для добавления комментария на базу данных

    if (name.trim() && message.trim()) {
      dispatch(actions.commentPush(newComment)); // эта часть кода для добавления комментария на сайт но не на базу данных
    }


    setName('');
    setMessage('');
  };

  return (
    <div className='comment__form'>
      <div className='comment__form__main-container'>
        <div className='comment__form-container'>
          <div className='comment__form__title-container'>
            <h1 className='comment__form__title'>Write a review</h1>
            <button
              className='comment__form__button'
              onClick={handleIsActive}
            ></button>
          </div>
          <div className='comment__form__name-container'>
            <label className='comment__form__name__label'>Enter Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className='comment__form__name'
              value={name}
              onChange={handleNameUpdate}
              required
            ></input>
          </div>
          <div>
            <textarea
              className='comment__form__textarea'
              placeholder="Your Review"
              value={message}
              onChange={handleMessageUpdate}
              required
              // onChange={handleMessageUpdate}
            ></textarea>
          </div>
          <div className='comment__form__button-confirm-container'>
            <button
              className='page__button comment__form__button-confirm'
              onClick={handleSubmitForm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}