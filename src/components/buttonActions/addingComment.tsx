import './commentForm.scss';
import '../GeneralStyle/Page.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as actions from '../features/commentSlicer';
import StarRating from '../Rating/StarRating';
import { useParams } from 'react-router-dom';

type Props = {
  isActive: boolean,
  setIsActive: (isActive: boolean) => void,
}

export const AddingCommentForm: React.FC<Props> = ({ isActive, setIsActive }) => {

  const handleIsActive = () => {
    setIsActive(!isActive);
  }

  const {productId} = useParams();

  const comments = useAppSelector(state => state.comments.items);

  const [rating, setRating] = useState(0);

  const dispatch = useAppDispatch();

  const [name, setName] = useState('');

  const [message, setMessage] = useState('');

  const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleMessageUpdate = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const handleSubmitForm = () => {
    const newComment = {
      wineId: Number(productId),
      userFirstAndLastName: name,
      message: message,
      rating: rating,
    };

    if (name.trim() && message.trim()) {
      dispatch(actions.addComment(newComment));

      setIsActive(!isActive);

    }
    console.log(comments);


    setName('');
    setMessage('');

  };

  const isActiveButton = !name.trim() || !message.trim();

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
              placeholder="Name Surname"
              className='comment__form__name'
              value={name}
              onChange={handleNameUpdate}
              required
            ></input>
          </div>
          <div>
            <div className="comment__form__stars">
              <StarRating
                totalStars={5}
                editable={true}
                rating={rating}
                setRating={setRating}
                // averageRating={}
              />
            </div>
            <textarea
              className='comment__form__textarea'
              placeholder="Your Review"
              value={message}
              onChange={handleMessageUpdate}
              required
              // onChange={handleMessageUpdate}
            >
            </textarea>
          </div>
          <div className='comment__form__button-confirm-container'>
            <button
              className='page__button comment__form__button-confirm'
              onClick={handleSubmitForm}
              disabled={isActiveButton}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
