import { render, screen, RenderResult, within, waitFor } from '@testing-library/react';
import { MultiStepForm } from './MultiStepForm';
import user from '@testing-library/user-event';

describe('Test MultiStepForm Component', () => {
  const onSubmit = jest.fn();
  let renderMethods: RenderResult;

  beforeEach(() => {
    onSubmit.mockClear();
    renderMethods = render(<MultiStepForm onSubmit={onSubmit} />);
  });

  it('test #1: should onSubmit is called when all fields pass validation', async () => {
    // First step
    user.type(getFirstName(), 'Newman');
    selectJobSituation('Full-Time');
    user.type(getCity(), 'Maracaibo');
    user.click(getMillionaire());
    user.click(getNextButton());

    // Second step
    user.type(findMoney(), '1000000');
    user.click(getNextButton());

    // Third step
    user.type(findDescription(), 'I am a millionaire');
    user.click(getSubmitButton());

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: 'Newman',
        job: 'FULL',
        city: 'Maracaibo',
        millionaire: true,
        money: 1000000,
        description: 'I am a millionaire'
      });
    });
  });

  it('test #2: should has 3 required fields on first step', async () => {
    user.click(getNextButton());

    await waitFor(() => {
      expect(getFirstName()).toHaveErrorMessage('Your First Name is Required');
      expect(getJobSituation()).toHaveErrorMessage('You need to select your job situation');
      expect(getCity()).toHaveErrorMessage('city is a required field');
    });
  });

  describe('Test first name field', () => {
    it('test #3: should shows error when first name has more than 6 chars ', async () => {
      user.type(getFirstName(), 'Alejandro');
      user.tab();

      await waitFor(() => {
        expect(getFirstName()).toHaveErrorMessage("Your name can't be longer than 6 chars");
      });
    });
  });

  describe('Test city field', () => {
    it('test #4: should shows error when city has less than 8 chars', async () => {
      user.type(getCity(), 'Cabimas');
      user.tab();

      await waitFor(() => {
        expect(getCity()).toHaveErrorMessage('city must be at least 8 characters');
      });
    });

    it('test #5: should shows error when city has more than 11 chars', async () => {
      user.type(getCity(), 'Maracaibo Zulia Venezuela');
      user.tab();

      await waitFor(() => {
        expect(getCity()).toHaveErrorMessage('city must be at most 11 characters');
      });
    });
  });

  describe('Test money field', () => {
    it('test #6: should shows error when money is lower than 1000000 and millionaire selected', async () => {
      // First step
      user.type(getFirstName(), 'Newman');
      selectJobSituation('Full-Time');
      user.type(getCity(), 'Maracaibo');
      user.click(getMillionaire());
      user.click(getNextButton());

      // Second step
      user.type(await findMoney(), '1000');
      user.click(getNextButton());

      await waitFor(async () => {
        expect(await findMoney()).toHaveErrorMessage(
          'Because you said you are a millionaire you need to have 1 million'
        );
      });
    });
  });
});

//* ---------------------------------------------------------------------------
//* Functions
//* ---------------------------------------------------------------------------
function getFirstName() {
  return screen.getByRole('textbox', { name: /first name/i });
}

function getJobSituation() {
  return screen.getByRole('combobox', { name: /job situation/i });
}

function selectJobSituation(jobSituation: string) {
  const dropdown = getJobSituation();
  user.selectOptions(dropdown, within(dropdown).getByRole('option', { name: jobSituation }));
}

function getCity() {
  return screen.getByRole('textbox', { name: /city/i });
}

function getMillionaire() {
  return screen.getByRole('checkbox', { name: /i am a millionaire/i });
}

function getNextButton() {
  return screen.getByRole('button', { name: /next/i });
}

function findMoney() {
  return screen.getByRole('spinbutton', { name: /all the money i have/i });
}

function findDescription() {
  return screen.getByRole('textbox', { name: /description/i });
}

function getSubmitButton() {
  return screen.getByRole('button', { name: /submit/i });
}
//* ---------------------------------------------------------------------------
