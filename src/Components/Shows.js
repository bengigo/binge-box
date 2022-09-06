import React, { useEffect } from 'react';
import './Shows.css';
import { useSelector, useDispatch } from 'react-redux';
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
          {/* make this button a link when it's ready */}
          <button key={show.id} type="button" className="details-link {show.id}">
            <p className="icon">
              <span className="material-symbols-outlined">
                arrow_circle_right
              </span>
            </p>
            <h2 className="show-name">{show.name}</h2>
            <p className="rating">{show.rating}</p>
          </button>
        </article>
      ))}
    </section>
  );
};

export default Shows;
