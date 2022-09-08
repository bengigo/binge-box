import React, { useEffect } from 'react';
import './Shows.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShows } from '../Redux/shows';

const Shows = () => {
  const shows = useSelector((state) => state.shows);

  const dispatch = useDispatch();

  useEffect(() => {
    if ((shows || []).length === 0) {
      dispatch(fetchShows());
    }
  }, [dispatch, shows]);

  return (
    <div>
      <section className="search-field">
        <p className="count">
          {shows.length}
          {' '}
          SHOWS AVAILABLE
        </p>
        <p className="genre-list">
          Options of genre: genre genre genre genre...
        </p>
        <input className="search-bar" placeholder="enter genre" />
        {' '}
      </section>

      <section className="main-display">
        {shows.map((show) => (
          <article key={show.id}>
            <Link to={`/ShowDetails/${show.id}`} state={{ id: `${show.id}` }}>
              <p className="icon">
                <span className="material-symbols-outlined">
                  arrow_circle_right
                </span>
              </p>
              <h2 className="show-name">{show.name}</h2>
              <p className="rating">{show.rating}</p>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Shows;
