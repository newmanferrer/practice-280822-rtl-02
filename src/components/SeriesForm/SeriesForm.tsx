import { useState, ChangeEvent } from 'react';
import { useForm } from '../../hooks';
import { createSerieFetch } from '../../services';
import { ISerie } from '../../models';
import {
  FormWrapper,
  FormStyled,
  LabelInputWrapper,
  LabelStyled,
  InputStyled,
  ButtonsWrapper,
  ButtonStyled
} from './StyledComponents';

const initialStateForm: ISerie = {
  title: '',
  creator: '',
  rating: 0,
  dates: '',
  image: '',
  channel: ''
};

export const SeriesForm = () => {
  const { form, setForm, handleChange } = useForm(initialStateForm);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.title === '' || form.creator === '' || form.channel === '') {
      alert('incomplete or error fields');
      return;
    }

    createSerieFetch(form)
      .then(response => response.json())
      .then(json => setSuccess(true))
      .catch(error => console.log(error))
      .finally(() => setForm(initialStateForm));
  };

  return (
    <FormWrapper>
      <FormStyled onSubmit={handleSubmit}>
        <LabelInputWrapper>
          <LabelStyled htmlFor='inputTitle'>Title</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputTitle'
            name='title'
            value={form.title}
            placeholder='serie title'
            autoComplete='off'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputCreator'>Creator</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputCreator'
            name='creator'
            value={form.creator}
            placeholder='serie creator'
            autoComplete='off'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputRating'>Ratin</LabelStyled>
          <InputStyled
            type='number'
            id='inputRating'
            name='rating'
            value={form.rating}
            placeholder='serie rating'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputDates'>Dates</LabelStyled>
          <InputStyled
            type='text'
            id='inputDates'
            name='dates'
            value={form.dates}
            placeholder='serie dates'
            autoComplete='off'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputImage'>Image</LabelStyled>
          <InputStyled
            type='text'
            id='inputImage'
            name='image'
            value={form.image}
            placeholder='serie image url'
            autoComplete='off'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputChannel'>Channel</LabelStyled>
          <InputStyled
            type='text'
            id='inputChannel'
            name='channel'
            value={form.channel}
            placeholder='serie channel'
            autoComplete='off'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <ButtonsWrapper>
          <ButtonStyled type='submit'>Create Serie</ButtonStyled>
        </ButtonsWrapper>
      </FormStyled>
    </FormWrapper>
  );
};
