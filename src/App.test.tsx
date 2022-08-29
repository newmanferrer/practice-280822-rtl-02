import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('test App Component', () => {
  it('test #1: should the text "App", in the document', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /^App$/ })).toBeInTheDocument();
  });
});
