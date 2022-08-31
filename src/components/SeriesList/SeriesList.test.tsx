import { render, RenderResult } from '@testing-library/react';
import { SeriesList } from '../';

describe('Test SeriesList Component', () => {
  let renderMethods: RenderResult;

  beforeEach(async () => {
    renderMethods = render(<SeriesList />);
  });

  it('test #1: should load three (3) images of the series', async () => {
    const { findAllByRole } = renderMethods;
    expect(await findAllByRole('img')).toHaveLength(3);
  });

  it('test #2: should show serie "game of thrones", in the documen', async () => {
    const { findByRole, findByText } = renderMethods;

    expect(
      await findByRole('heading', { level: 2, name: /^Juego de Tronos$/ })
    ).toBeInTheDocument();
    expect(await findByText(/^Juego de Tronos$/)).toBeInTheDocument();
  });
});
