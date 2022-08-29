//* ///////////////////////////////////////////////////////////////////////////
//* Serie Card
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
//* 4.1.- CardWrapper
//* ---------------------------------------------------------------------------
const CardWrapper = styled(Container)`
  margin: 0.5rem;
  padding: 1rem;

  border: 2px solid ${COLORS.black};
  border-radius: 5px;
  background-color: ${COLORS.textWhite};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- TitleH2
//* ---------------------------------------------------------------------------
const TitleH2 = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- Paragraph
//* ---------------------------------------------------------------------------
const Paragraph = styled.p`
  margin-bottom: 0.25rem;
  font-weight: bold;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- Image
//* ---------------------------------------------------------------------------
const Image = styled.img`
  margin: 0.25rem;
  width: 12rem;
  height: 12rem;

  border-radius: 50%;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { CardWrapper, TitleH2, Paragraph, Image };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
