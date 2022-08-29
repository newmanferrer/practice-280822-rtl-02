import { Header, Footer } from '../../components';
import {
  MainStyled,
  SectionStyled,
  HeaderStyled,
  H1Styled,
  H2Styled,
  H3Styled,
  PStyled,
  AStyled,
  LinkStyled
} from './StyledComponents';

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>Learning React Testing Library</H1Styled>
            <H2Styled>Practice No. 2</H2Styled>
            <H2Styled>MSW (Mock Service Worker)</H2Styled>
            <PStyled>
              API mocking of the next generation. Mock by intercepting requests on the network
              level. Seamlessly reuse the same mock definition for testing, development, and
              debugging.
            </PStyled>
            <AStyled href='https://mswjs.io/' target='_blank' rel='noopener noreferrer'>
              MSW docs
            </AStyled>
          </HeaderStyled>
        </SectionStyled>

        <SectionStyled>
          <HeaderStyled>
            <H3Styled>1.- Series for example</H3Styled>
          </HeaderStyled>
          <PStyled>
            Go to <LinkStyled to='/series'>series page</LinkStyled>, to learn all about MSW.
          </PStyled>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
