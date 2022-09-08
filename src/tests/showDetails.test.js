import DetailsReducer, { showDetails } from '../Redux/showDetails';
import detailedData from './showDetailsData';

describe('test details data', () => {
  it('should update the state with a show data', () => {
    expect(DetailsReducer(detailedData, showDetails(detailedData)))
      .toEqual(detailedData);
  });
});
