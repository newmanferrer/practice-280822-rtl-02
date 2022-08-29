import { Header, Footer, SeriesList, SeriesForm } from '../../components';
import { MainStyled, SectionStyled, HeaderStyled, H1Styled, GridWrapper } from './StyledComponents';

export const SeriesPage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <GridWrapper>
          <SectionStyled>
            <HeaderStyled>
              <H1Styled>Series List</H1Styled>
            </HeaderStyled>
            <SeriesList />
          </SectionStyled>

          <SectionStyled>
            <HeaderStyled>
              <H1Styled>Series form</H1Styled>
            </HeaderStyled>
            <SeriesForm />
          </SectionStyled>
        </GridWrapper>
      </MainStyled>
      <Footer />
    </>
  );
};
