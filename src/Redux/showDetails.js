import baseUrl from './apiData';

const SHOW_DETAILS = 'binge-box/shows/SHOW_DETAILS';

export const showDetails = (data) => ({
  type: SHOW_DETAILS,
  data,
});

const showBasics = (data) => {
 
  console.log(showDetails(data));
  return showDetails(shows);
};

export const fetchDetails = (id) => (dispatch) => {
  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch(showBasics(json)));
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