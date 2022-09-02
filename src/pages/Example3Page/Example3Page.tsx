import { Header, Footer } from '../../components';
import { Drawer } from '../../examples';
import { MainStyled, SectionStyled, HeaderStyled, H1Styled, PStyled } from './StyledComponents';

export const Example3Page = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>Example No.3</H1Styled>
            <PStyled>Mock Drawer Example</PStyled>
          </HeaderStyled>
          <Drawer />
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
