import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/ConfigureStore';
import Shows from '../Components/Shows';

describe('Shows', () => {
  it('should render shows component', () => {
    render(
      <Provider store={store}>
        <Shows />
      </Provider>,
    );
    expect(Shows).toMatchSnapshot();
  });
});
