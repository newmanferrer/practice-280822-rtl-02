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
  LinkStyled,
  SpanStyled
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
            Go to <LinkStyled to='/series'>series page</LinkStyled>, to learn about MSW.
          </PStyled>
        </SectionStyled>

        <SectionStyled>
          <HeaderStyled>
            <H3Styled>2.- Mocking React Components and Functions using Jest</H3Styled>
            <PStyled>
              In the route <SpanStyled>src/examples</SpanStyled> , there are four examples that we
              can study to understand how we can implement mocks using jest.
            </PStyled>
          </HeaderStyled>
          <PStyled>
            Go to <LinkStyled to='/example2'>example2 page</LinkStyled> (mock grid example).
          </PStyled>
          <PStyled>
            Go to <LinkStyled to='/example3'>example3 page</LinkStyled> (mock drawer example).
          </PStyled>
        </SectionStyled>

        <SectionStyled>
          <HeaderStyled>
            <H3Styled>3.- Form tests implemented with formik</H3Styled>
          </HeaderStyled>
          <PStyled>
            Go to <LinkStyled to='/formik'>formik page</LinkStyled>.
          </PStyled>
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
