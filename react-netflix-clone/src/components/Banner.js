import axios from 'api/axios';
import requests from 'api/requests';
import React, { useEffect, useState } from 'react';
import './Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);

    // 여러 영화 중 하나의 ID를 가져오기
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;
    console.log('movieId: ', movieId);

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포람)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, { params: { append_to_response: 'videos' } });
    setMovie(movieDetail);
  };

  // 말줄임
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner__title'>{movie.title || movie.name || movie.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button play'>Play</button>
          <button className='banner__button play info'>More Information</button>
        </div>
        <h1 className='banner__description'>{truncate(movie.overview, 100)}</h1>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  );
}
