import React, { useEffect } from 'react';
import './SearchField.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShows } from '../Redux/shows';

const SearchField = () => {
  const shows = useSelector((state) => state.shows);

  const dispatch = useDispatch();

  useEffect(() => {
    if ((shows || []).length === 0) {
      dispatch(fetchShows());
    }
  }, [dispatch, shows]);
  return (
    <section className="search-field">
      <p className="count">
        {shows.length}
        {' '}
        SHOWS AVAILABLE
      </p>
      <p className="genre-list">Options of genre: genre genre genre genre...</p>
      <input className="search-bar" placeholder="enter genre" />
      {' '}

    </section>
  );
};

export default SearchField;
