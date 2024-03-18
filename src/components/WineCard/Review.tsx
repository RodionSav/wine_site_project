import './review.scss';
import { CommentType } from "../../types/Product"

type Props = {
  comment: CommentType
  & {createdAt: string};
}

export const Review: React.FC<Props> = ({ comment }) => {
  const day = comment.createdAt.getDate();
  const month = comment.createdAt.getMonth() + 1;
  const year = comment.createdAt.getFullYear();

  return (
    <div className="review">
      <div className='review-container'>
        <h1 className="review__title">{comment.userFirstAndLastName}</h1>
        <p className='review__paragraph'>{comment.message}</p>
      </div>
      <span className='review__time'>{`${day}/${month}/${year}`}</span>
    </div>
  )
}