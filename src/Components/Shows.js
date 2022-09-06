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
    // şimdi bu satırın altında bir display structure yapalım
    <section className="main-display">
      {/* //     <article>
    //         <a className='details-link'>
    //             <p className='icon'></p>
    //             <h2 className='show-name'></h2>
    //             <p className='rating'></p>
    //         </a>
    //     </article> */}
      {shows.map((show) => (
        <article key={show.id}>
          <Link to="/show">

            {/* make this button a link when it's ready */}
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
  );
};

export default Shows;
