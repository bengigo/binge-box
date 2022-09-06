import React, { useEffect } from 'react';
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
    <h1>COMNG SOON</h1>
  );
};

export default Shows;
