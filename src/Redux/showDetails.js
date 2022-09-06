import baseUrl from './apiData';

const SHOW_DETAILS = 'fruit-index/shows/SHOW_DETAILS';

export const showDetails = (data) => ({
  type: SHOW_DETAILS,
  data,
});

export const fetchDetails = (id) => (dispatch) => {
  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch(showDetails(json)));
};

const DetailsReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return action.data;
    default:
      return state;
  }
};
export default DetailsReducer;
