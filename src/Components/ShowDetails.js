import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchDetails } from '../Redux/showDetails';
import './ShowDetails.css';

export default function ShowDetails() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <article>
      <div className="show-nav">
        <Link to="/">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <h3>{details.name}</h3>
      </div>

      <ul className="details-list">
        <li className="time show-row">
          <p>Runtime:</p>
          <p>
            {details.runtime}
            {' '}
            min
          </p>
        </li>

        <li className="language show-row">
          <p>Language:</p>
          <p>{details.language}</p>
        </li>

        <li className="status show-row">
          <p>Status:</p>
          <p>{details.status}</p>
        </li>

        <li className="premiered show-row">
          <p>Premiered:</p>
          <p>{details.premiered}</p>
        </li>

        <li className="ended show-row">
          <p>Ended:</p>
          <p>{details.ended}</p>
        </li>

        <li className="official show-row">
          <p>Official web site:</p>
          <p>{details.officialSite}</p>
        </li>
      </ul>

    </article>
  );
}
