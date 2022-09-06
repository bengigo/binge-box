import React, { useEffect } from 'react';
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
        shows available
      </p>
      <input />
    </section>
  );
};

export default SearchField;
