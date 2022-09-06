import {
  render,
  screen,
  RenderResult,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import { SeriesList } from '../';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Test SeriesList Component', () => {
  let renderMethods: RenderResult;

  beforeEach(async () => {
    renderMethods = render(<SeriesList />);
  });

  it('test #1: should show loader in the document', async () => {
    const { getByRole } = renderMethods;

    await waitFor(() => {
      expect(getByRole('img', { name: /^loader$/ })).toBeInTheDocument();
    });
  });

  it('test #2: should load three (3) images of the series', async () => {
    const { getByRole, findAllByRole } = renderMethods;

    await waitForElementToBeRemoved(() => getByRole('img', { name: /^loader$/ }));
    expect(await findAllByRole('img')).toHaveLength(3);
  });

  it('test #3: should show serie "game of thrones", in the documen', async () => {
    const { findByRole, findByText } = renderMethods;

    expect(
      await findByRole('heading', { level: 2, name: /^Juego de Tronos$/ })
    ).toBeInTheDocument();
    expect(await findByText(/^Juego de Tronos$/)).toBeInTheDocument();
  });

  it('test #4: should show error message code 500, in the document', async () => {
    server.use(
      rest.get('https://peticiones.online/api/series', (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ hasError: false, message: 'CODE 500' }));
      })
    );

    // server.printHandlers();
    await waitForElementToBeRemoved(() => screen.getByRole('img', { name: /^loader$/ }));
    // screen.debug();
  });
});
