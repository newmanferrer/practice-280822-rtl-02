import { Header, Footer } from '../../components';
import { Example2 } from '../../examples';
import { MainStyled, SectionStyled, HeaderStyled, H1Styled, PStyled } from './StyledComponents';

const onMoney = (n: number): void => {};

export const Example2Page = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>Example No.2</H1Styled>
            <PStyled>Mock Grid Example</PStyled>
          </HeaderStyled>
          <Example2 onMoney={onMoney} />
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
