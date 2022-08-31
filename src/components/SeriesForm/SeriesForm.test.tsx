import { render, screen, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SeriesForm } from '..';

describe('Test SeriesForm Component', () => {
  let renderMethods: RenderResult;

  beforeEach(async () => {
    renderMethods = render(<SeriesForm />);
  });

  it('test #1: should six inputs in the form', () => {
    const { getAllByRole } = renderMethods;

    expect(getAllByRole('spinbutton')).toHaveLength(1);
    expect(getAllByRole('textbox')).toHaveLength(5);
  });

  it('test #2: should create a new serie', async () => {
    const { getByRole, getByLabelText } = renderMethods;
    const user = userEvent.setup();
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
    const inputTitle = getByRole('textbox', { name: /^Title$/ });
    const inputCreator = getByLabelText(/^Creator$/, { selector: 'input' });

    const inputRatin = getByRole('spinbutton', { name: /^Ratin$/ });
    const inputDates = getByRole('textbox', { name: /^Dates$/ });
    const inputImage = getByRole('textbox', { name: /^Image$/ });
    const inputChannel = getByRole('textbox', { name: /^Channel$/ });
    const buttonCreate = getByRole('button', { name: /^Create Serie$/ });
    //* ---------------------------------------------------------------------

    user.type(inputTitle, dataForm.title);
    user.type(inputCreator, dataForm.creator);
    user.type(inputRatin, dataForm.ratin);
    user.type(inputDates, dataForm.dates);
    user.type(inputImage, dataForm.image);
    user.type(inputChannel, dataForm.channel);
    user.click(buttonCreate);

    // const messageSuccess = await screen.findByText(/series created successfully/i);
  });
});
