import { render, screen, fireEvent } from '@testing-library/react';
import { DataGrid } from '@material-ui/data-grid';
import { Example2, rows } from '../';

jest.mock('@material-ui/data-grid', () => ({
  ...jest.requireActual('@material-ui/data-grid'),
  DataGrid: jest.fn(() => <div>Tables</div>)
}));

const mockedDataGrid = jest.mocked(DataGrid);

describe('Test Example2 Component', () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
  });

  it('test #1.1: should renders mateial-ui grid with columnDefs and rowData', () => {
    const mockOnMoney = () => {
      console.log('clicked');
    };

    render(<Example2 onMoney={mockOnMoney} />);
    fireEvent.click(screen.getByRole('button', { name: /^Give me 33 dollars$/ }));
  });

  it('test #1.2: should renders mateial-ui grid with columnDefs and rowData', done => {
    const mockOnMoney = (n: number) => {
      expect(n).toBe(33);
      done();
    };

    render(<Example2 onMoney={mockOnMoney} />);
    fireEvent.click(screen.getByRole('button', { name: /^Give me 33 dollars$/ }));
  });

  it('test #1.3: should renders mateial-ui grid with columnDefs and rowData', () => {
    const mockOnMoney = jest.fn();
    render(<Example2 onMoney={mockOnMoney} />);

    fireEvent.click(screen.getByRole('button', { name: /^Give me 33 dollars$/ }));
    expect(mockOnMoney).toHaveBeenCalledTimes(1);
    expect(mockOnMoney).toHaveBeenCalledWith(33);
  });

  it('test #2: should renders table passing the expected props', () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
    expect(mockedDataGrid).toHaveBeenLastCalledWith(
      {
        rows: rows,
        columns: [
          expect.objectContaining({ field: 'id' }),
          expect.objectContaining({ field: 'firstName' }),
          expect.objectContaining({ field: 'lastName' }),
          expect.objectContaining({ field: 'age' })
        ],
        pageSize: 5,
        rowsPerPageOptions: [5],
        checkboxSelection: true
      },
      {}
    );
  });
});
