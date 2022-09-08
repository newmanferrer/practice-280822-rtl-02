import { render, screen } from '@testing-library/react';
import { Example4, Drawer } from '../';

jest.mock('../example3/Drawer');
jest.mocked(Drawer).mockImplementation(() => <div>mocked: drawer</div>);

describe('Test Example4 Drawer Component', () => {
  it('test #1: should renders Drawer in the document', () => {
    render(<Example4 />);
    expect(screen.queryByText('Hello Drawer Component!')).not.toBeInTheDocument();
    expect(screen.getByText('mocked: drawer')).toBeInTheDocument();
  });
});
