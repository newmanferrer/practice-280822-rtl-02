import { useState, useEffect } from 'react';
import { getAllSeriesFetch } from '../../services';
import { Loader, Message, SerieCard } from '../';
import { ISerie } from '../../models';
import { ListWrapper } from './StyledComponents';

const errorInitialState = { hasError: false, message: '' };

export const SeriesList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState<ISerie[]>();
  const [error, setError] = useState(errorInitialState);

  useEffect(() => {
    setError(errorInitialState);
    setIsLoading(true);
    getAllSeriesFetch()
      .then(data => setSeries(data))
      .catch(error => handleError(error))
      .finally(() => setIsLoading(false));
  }, []);

  function handleError(error: any) {
    setError({ hasError: true, message: error.message });
  }

  return (
    <ListWrapper>
      {isLoading && <Loader />}
      {!isLoading && error.hasError && <Message type='error' text={error.message} />}
      {!isLoading &&
        !error.hasError &&
        series &&
        series.map(serie => <SerieCard key={serie.id} serie={serie} />)}
    </ListWrapper>
  );
};
