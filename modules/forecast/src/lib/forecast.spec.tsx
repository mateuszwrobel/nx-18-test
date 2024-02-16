import { render } from '@testing-library/react';

import Forecast from './forecast';

describe('Forecast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Forecast />);
    expect(baseElement).toBeTruthy();
  });
});
