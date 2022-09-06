import baseUrl from './apiData';

const SHOW_FRUITS = 'fruit-index/fruits/SHOW_FRUITS';

export const showFruits = (data) => ({
  type: SHOW_FRUITS,
  data,
});

export const fetchFruits = () => (dispatch) => {
  fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(showFruits(json)));
};

export default function fruitsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_FRUITS:
      return action.data;
    default:
      return state;
  }
}
