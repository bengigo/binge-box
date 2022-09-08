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
        <input className="search-bar" placeholder="search by name" onChange={(event) => setQuery(event.target.value)} />
      </section>

      <section className="main-display">
        {shows.filter((show) => {
          if (query === '') {
            return true;
          } if (show.name.toLowerCase().includes(query.toLowerCase())) {
            return true;
          } return false;
        }).map((show) => (
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
