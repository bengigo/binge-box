import baseUrl from './apiData';

const SHOW_DETAILS = 'binge-box/shows/SHOW_DETAILS';

export const showDetails = (data) => ({
  type: SHOW_DETAILS,
  data,
});

// const showBasics = (data) => {
//   const shows = data.map((show) => ({
//     // id: show.id,
//     // name: show.name,
//     // language: show.language,
//     // genres: show.genres,
//     // runtime: show.runtime,
//     // rating: JSON.stringify(show.rating.average),
//     // topic: show.summary,
//     // poster: show.image.medium,
//   }));
//   return showShows(shows);
// };

const filterDetails = (data) => {
  const details = {
    poster: data.image.medium,
    name: data.name,
    runtime: data.runtime,
    language: data.language,
    status: data.status,
    premiered: data.premiered,
    ended: data.ended,
    url: data.officialSite,
  };
  return showDetails(details);
};

export const fetchDetails = (id) => (dispatch) => {
  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch(filterDetails(json)));
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
