import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../Redux/showDetails';

export default function ShowDetails() {
  const details = useSelector(((state) => state.details));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);
  // vdfavds
  details.map((card) => (
    <div key={id} className="holidayBreakdownContainer">
      <div key={id} className="holidayBreakdown">
        <p>{card.name}</p>
        <p>
          Date:
          {' '}
          {card.id}
        </p>
        <p>
          {' '}
          Local Name:
          {' '}
          {card.language}
        </p>

      </div>
    </div>
  ));
}
