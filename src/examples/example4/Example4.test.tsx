import { render, screen } from '@testing-library/react';
import { Drawer, Example4 } from '../';

jest.mock('../example3/Drawer');
jest.mocked(Drawer).mockImplementation(() => <div>mocked: drawer</div>);

describe('Example4', () => {
  it('test #1: should renders Drawer in the document', () => {
    render(<Example4 />);
    expect(screen.queryByText('Hello Drawer Component!')).not.toBeInTheDocument();
    expect(screen.getByText('mocked: drawer')).toBeInTheDocument();
  });
});
