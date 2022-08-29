//* ///////////////////////////////////////////////////////////////////////////
//* Header
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../colors';
import octopusLogo from '../../assets/images/react-testing-library-octopus-64x64.png';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.-
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- Header Styled
//* ---------------------------------------------------------------------------
const HeaderStyled = styled.header`
  width: 100vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${COLORS.backgroundLight};
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.2.- Logo and Company Name Link Wrapper
//* ---------------------------------------------------------------------------
const LogoAndCompanyNameLinkWrapper = styled(Link)`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.redRTL};
  text-decoration: none;
  transition: all 0.7s ease-in-out;
  border: 1px solid transparent;
  border-radius: 15px;
  &:hover .logoImage {
    background-color: ${COLORS.textBlueLight};
  }
  &:hover .companyName {
    color: ${COLORS.textBlueLight};
  }
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.3.- Logo Image
//* ---------------------------------------------------------------------------
const LogoImage = styled.img.attrs({
  src: `${octopusLogo}`,
  className: 'logoImage'
})`
  width: 3rem;
  height: 3rem;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
`;
//* ---------------------------------------------------------------------------

//* ---------------------------------------------------------------------------
//* 4.4.- Logo Icon
//* ---------------------------------------------------------------------------
const CompanyName = styled.h2.attrs({
  className: 'companyName'
})`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.5s ease-in-out;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { HeaderStyled, LogoAndCompanyNameLinkWrapper, LogoImage, CompanyName };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
