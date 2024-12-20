import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'api/axios';
import { useDebounce } from 'hooks/useDebounce';
import './SearchPage.css';

function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  let query = useQuery();
  const searchTerm = useDebounce(query.get('q'), 500);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      console.log('request: ', request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;

            return (
              <div key={movie.id} className='movie'>
                <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)}>
                  <img className='movie__poster' src={movieImageUrl} alt='movie'></img>
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default SearchPage;
