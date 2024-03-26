import { NavLink } from "react-router-dom"
import './question.scss';

export const QuestionPage = () => {
  return (
    <div className="question">
      {/* <img className="question-back" src="images2/psevdo-video.png" /> */}
      {/* <video src="images2/video.mhtml" /> */}
      {/* <video src="https://vimeo.com/797802998" /> */}
      {/* <video width="100%" height="100%" controls> */}
        {/* <source src="https://vimeo.com/797802998" type="video/mp4"/> */}
      {/* </video> */}
      {/* <iframe src="https://player.vimeo.com/video/797802998" width="1000" height="1000" allow="autoplay; fullscreen" 
      allowfullscreen></iframe> */}
      <iframe src="https://player.vimeo.com/video/797802998?autoplay=1&controls=0&loop=1&title=0&byline=0&portrait=0" className="question__video"
        frameBorder="0"
        allow="autoplay; fullscreen" 
        // allowfullscreen
        allowFullScreen
        ></iframe>

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
