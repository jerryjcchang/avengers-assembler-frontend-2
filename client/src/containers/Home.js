import React from 'react'

const Home = (props) => {
  return(
    <div className="home">
      <img className="logo" src="https://fontmeme.com/permalink/200205/ad4ec64b887851b812eb235f670234e6.png"/>
      <div className="silhouette">
        <img className="bg-img" src="https://i.imgur.com/w9HSItk.jpg"/>
      </div>
      <button id="start-btn" className="big ready-button" onClick={() => {props.history.push('/game')}}>START</button>

    </div>
  )
}

export default Home
