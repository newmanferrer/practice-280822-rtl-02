//* ///////////////////////////////////////////////////////////////////////////
//* Serie Form
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- FormWrapper
//* ---------------------------------------------------------------------------
const FormWrapper = styled(Container)`
  padding: 3rem 1rem;
  border: 2px solid ${COLORS.black};
  border-radius: 5px;
  background-color: ${COLORS.redRTL};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- H2Styled
//* ---------------------------------------------------------------------------
const H2Styled = styled.h2``;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- FormStyled
//* ---------------------------------------------------------------------------
const FormStyled = styled.form``;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- LabelInputWrapper
//* ---------------------------------------------------------------------------
const LabelInputWrapper = styled(Container)`
  margin: 0.5rem;
  flex-direction: row;
  justify-content: space-between;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.5.- LabelStyled
//* ---------------------------------------------------------------------------
const LabelStyled = styled.label`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- InputStyled
//* ---------------------------------------------------------------------------
const InputStyled = styled.input`
  padding: 0.25rem;
  outline: none;
  border: none;
  border-radius: 3px;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.5.- ButtonsWrapper
//* ---------------------------------------------------------------------------
const ButtonsWrapper = styled(Container)`
  margin-top: 2rem;
  flex-direction: row;
  justify-content: space-evenly;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.6.- ButtonStyled
//* ---------------------------------------------------------------------------
const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;

  font-weight: bold;
  transition: all 0.5s ease-in-out;

  outline: none;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.textBlueLight};
  }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export {
  FormWrapper,
  H2Styled,
  FormStyled,
  LabelInputWrapper,
  LabelStyled,
  InputStyled,
  ButtonsWrapper,
  ButtonStyled
};
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////