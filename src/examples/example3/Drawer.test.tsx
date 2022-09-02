import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Drawer } from '../';

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  SwipeableDrawer: jest.fn(() => <div>HELLOOOOOO!!!</div>)
}));

describe('Drawer', () => {
  it('test #1: should no show "Hello World!", in the document', () => {
    render(<Drawer />);
    expect(screen.queryByText(/^HELLOOOOOO!!!$/)).toBeInTheDocument();
  });

  it('test #2: should clicking on button "Open Drawer", show drawer "Hello World!"', () => {
    render(<Drawer />);
    user.click(screen.getByRole('button', { name: 'Open Drawer' }));
    expect(screen.getByText(/^HELLOOOOOO!!!$/)).toBeInTheDocument();
  });
});
