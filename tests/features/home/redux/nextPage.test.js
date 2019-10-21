import {
  HOME_NEXT_PAGE,
} from '../../../../src/features/home/redux/constants';

import {
  nextPage,
  reducer,
} from '../../../../src/features/home/redux/nextPage';

describe('home/redux/nextPage', () => {
  it('returns correct action by nextPage', () => {
    expect(nextPage()).toHaveProperty('type', HOME_NEXT_PAGE);
  });

  it('handles action type HOME_NEXT_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_NEXT_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
