import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components';
import { HomePage, SeriesPage, NotFoundPage } from './pages';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='series' element={<SeriesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
