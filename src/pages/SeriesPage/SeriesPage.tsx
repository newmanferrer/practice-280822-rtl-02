import { Header, Footer, SeriesList } from '../../components';
import { MainStyled, SectionStyled, HeaderStyled, H1Styled } from './StyledComponents';

export const SeriesPage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>Series List</H1Styled>
          </HeaderStyled>
          <SeriesList />
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
