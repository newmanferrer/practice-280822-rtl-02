import { Header, Footer, MultiStepForm } from '../../components';
import { MainStyled, SectionStyled, HeaderStyled, H1Styled, PStyled } from './StyledComponents';

export const FormikPage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionStyled>
          <HeaderStyled>
            <H1Styled>Formik</H1Styled>
            <PStyled>Form tests implemented with formik.</PStyled>
          </HeaderStyled>

          <MultiStepForm
            onSubmit={values => {
              console.log('Form Submitted', values);
            }}
          />
        </SectionStyled>
      </MainStyled>
      <Footer />
    </>
  );
};
