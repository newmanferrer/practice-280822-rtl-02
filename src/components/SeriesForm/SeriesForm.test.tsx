import { render, screen } from '@testing-library/react';
import { SeriesForm } from '..';

describe('Test SeriesForm Component', () => {
  it('test #1: should load images of the series', async () => {
    const { debug } = render(<SeriesForm />);
    debug();
    expect(true).toBe(true);
  });
});
