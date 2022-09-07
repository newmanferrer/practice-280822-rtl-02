import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components';
import {
  HomePage,
  SeriesPage,
  Example2Page,
  Example3Page,
  FormikPage,
  NotFoundPage
} from './pages';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='series' element={<SeriesPage />} />
          <Route path='example2' element={<Example2Page />} />
          <Route path='example3' element={<Example3Page />} />
          <Route path='formik' element={<FormikPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
