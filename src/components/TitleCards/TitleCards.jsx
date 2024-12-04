import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from "../../assets/cards/Cards_data"

const TitleCards = ({ title, categroy }) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTUwMDViN2RiMDZlODc4NzQ0YTE4MTU1ODQyNTFlZiIsIm5iZiI6MTczMzExMTkyOC41OTYsInN1YiI6IjY3NGQzMDc4N2MxZDY5OGI3ZGY3ZTUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OPHhLypNmq4snTdOZrRTPduD00SpjWPWxrJ7JnOY0o'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
    // Cleanup listener on unmount
    return () => {
      cardsRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
