import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTUwMDViN2RiMDZlODc4NzQ0YTE4MTU1ODQyNTFlZiIsIm5iZiI6MTczMzExMTkyOC41OTYsInN1YiI6IjY3NGQzMDc4N2MxZDY5OGI3ZGY3ZTUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OPHhLypNmq4snTdOZrRTPduD00SpjWPWxrJ7JnOY0o'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setApiData(json.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/>
      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" title="trailer" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
