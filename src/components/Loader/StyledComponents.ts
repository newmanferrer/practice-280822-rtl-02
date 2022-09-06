//* ///////////////////////////////////////////////////////////////////////////
//* LoaderStyled
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import spinner from '../../assets/loaders/ovalWhite.svg';
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
//* 4.1.- LoaderWrapper
//* ---------------------------------------------------------------------------
const LoaderWrapper = styled(Container)`
  margin: 1rem 0;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- LoaderStyled
//* ---------------------------------------------------------------------------
const LoaderStyled = styled.img.attrs({
  src: `${spinner}`
})`
  text-align: center;
  margin-bottom: 1rem;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { LoaderWrapper, LoaderStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
