import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchDetails } from '../Redux/showDetails';

export default function ShowDetails() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <div>
      <div className="show-navigation">
        <Link to="/">

          <p className="icon">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </p>
        </Link>

        <h3>{details.name}</h3>
      </div>

      <div className="show-header">
        <img src={details.image.medium} alt="poster" />
        <div className="show-heading">
          <p>{details.rating.average}</p>
          <p>
            {details.runtime}
            {' '}
            min
          </p>
        </div>
      </div>

      <ul>
        {details.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
