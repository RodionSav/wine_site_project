import { NavLink } from "react-router-dom"
import './question.scss';

export const QuestionPage = () => {
  return (
    <div className="question">
      <img className="question-back" src="images2/psevdo-video.png" />
      {/* <video src="images2/video.mhtml" /> */}
      <div className="question-container">
        <h1 className="question__title ">Are you 21?</h1>
        <div className="question__button-container">
          <NavLink
            className='question__button question__button-deny'
            to='/'
          >
            No
          </NavLink>
          <NavLink
            className='question__button question__button-accept'
            to='/about'
          >
            Yes
          </NavLink>
        </div>
      </div>
    </div>
  )
}
