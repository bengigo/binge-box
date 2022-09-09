import React, { useEffect, useState } from 'react';
import './Shows.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShows } from '../Redux/shows';

const Shows = () => {
  const shows = useSelector((state) => state.shows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, []);

  const [query, setQuery] = useState('');

  return (
    <div>
      <section className="search-field">
        <p className="count">
          {shows.length}
          {' '}
          SHOWS AVAILABLE
        </p>
        <input
          className="search-bar"
          placeholder="search by name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <section className="main-display">
        <ul className="show-list">
          {shows
            .filter((show) => {
              if (query === '') {
                return true;
              }
              if (show.name.toLowerCase().includes(query.toLowerCase())) {
                return true;
              }
              return false;
            })
            .map((show) => (
              <li className="main-list" key={show.id}>
                <Link
                  to={`/ShowDetails/${show.id}`}
                  state={{ id: `${show.id}` }}
                >
                  <p className="icon">
                    <span className="material-symbols-outlined">
                      arrow_circle_right
                    </span>
                  </p>
                  <img className="main-poster" src={show.poster} alt="poster" />
                  <div className="shows-info">
                    <h2 className="show-name">{show.name}</h2>
                    <p className="rating">{show.rating}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Shows;
