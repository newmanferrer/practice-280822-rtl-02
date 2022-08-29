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
  const { form, handleChange } = useForm(initialStateForm);
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
      .catch(error => console.log(error));
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
            name='inputTitle'
            value={form.title}
            placeholder='serie title'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputCreator'>Creator</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputCreator'
            name='inputCreator'
            value={form.creator}
            placeholder='serie creator'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputRating'>Ratin</LabelStyled>
          <InputStyled
            type='number'
            required
            id='inputRating'
            name='inputRating'
            value={form.rating}
            placeholder='serie rating'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputDates'>Dates</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputDates'
            name='inputDates'
            value={form.dates}
            placeholder='serie dates'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputImage'>Image</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputImage'
            name='inputImage'
            value={form.image}
            placeholder='serie image'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <LabelStyled htmlFor='inputChannel'>Channel</LabelStyled>
          <InputStyled
            type='text'
            required
            id='inputChannel'
            name='inputChannel'
            value={form.channel}
            placeholder='serie channel'
            onChange={handleChange}
          />
        </LabelInputWrapper>

        <ButtonsWrapper>
          <ButtonStyled type='reset'>Clear</ButtonStyled>
          <ButtonStyled type='submit'>Create Serie</ButtonStyled>
        </ButtonsWrapper>
      </FormStyled>
    </FormWrapper>
  );
};
