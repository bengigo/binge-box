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

  return (
    <div>
      <h3>{details.name}</h3>
    </div>
  );
}
