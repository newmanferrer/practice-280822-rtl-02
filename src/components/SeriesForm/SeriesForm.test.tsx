import {
  render,
  screen,
  RenderResult,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { SeriesForm } from '..';

describe('Test SeriesForm Component', () => {
  let renderMethods: RenderResult;

  beforeEach(() => {
    renderMethods = render(<SeriesForm />);
  });

  it('test #1: should show six inputs in the form', () => {
    const { getAllByRole } = renderMethods;

    expect(getAllByRole('spinbutton')).toHaveLength(1);
    expect(getAllByRole('textbox')).toHaveLength(5);
  });

  it('test #2: should show the button "Create Series", in the form', () => {
    const { getByRole } = renderMethods;
    expect(getByRole('button', { name: /^Create Serie$/ })).toBeInTheDocument();
  });

  it('test #3: should create a new series, the success message appears and then disappears.', async () => {
    const dataForm = {
      title: 'My serie title',
      creator: 'My serie creator',
      ratin: '10',
      dates: 'My serie dates',
      image: 'My serie image url',
      channel: 'My serie channel'
    };

    //* ---------------------------------------------------------------------
    //* Notes: Using getByRole, the name is taken from the label associated
    //* with the input. We can also use getByLabelText to get the input.
    //* Let's remember the priority: 1.- getByRole, 2.- getByLabelText
    //* ---------------------------------------------------------------------
    const inputTitle = screen.getByRole('textbox', { name: /^Title$/ });
    const inputCreator = screen.getByLabelText(/^Creator$/, { selector: 'input' });

    const inputRatin = screen.getByRole('spinbutton', { name: /^Ratin$/ });
    const inputDates = screen.getByRole('textbox', { name: /^Dates$/ });
    const inputImage = screen.getByRole('textbox', { name: /^Image$/ });
    const inputChannel = screen.getByRole('textbox', { name: /^Channel$/ });
    const buttonCreate = screen.getByRole('button', { name: /^Create Serie$/ });
    //* ---------------------------------------------------------------------

    //* ---------------------------------------------------------------------
    //* Notes: Since fields "title" and "creator" are required, they must be
    //* handled in a special way. With "await" we wait until the required fields are
    //* filled before pressing the button and submitting the form. With "act"
    //* we eliminate the warning for changes of state "setSerieCreated" and
    //* "setForm".
    //* ---------------------------------------------------------------------
    await act(async () => {
      await user.type(inputTitle, dataForm.title);
      await user.type(inputCreator, dataForm.creator);
      await user.type(inputRatin, dataForm.ratin);
      await user.type(inputDates, dataForm.dates);
      await user.type(inputImage, dataForm.image);
      await user.type(inputChannel, dataForm.channel);
      await user.click(buttonCreate);
    });
    //* ---------------------------------------------------------------------

    await waitFor(() => {
      screen.getByRole('divMessageSuccess', { name: /^messageSuccess$/ });
    });

    expect(screen.getByRole('divMessageSuccess', { name: /^messageSuccess$/ })).toBeInTheDocument();

    await waitForElementToBeRemoved(
      () => screen.queryByRole('divMessageSuccess', { name: /^messageSuccess$/ }),
      { timeout: 2000 }
    );

    expect(
      screen.queryByRole('divMessageSuccess', { name: /^messageSuccess$/ })
    ).not.toBeInTheDocument();
  });
});
