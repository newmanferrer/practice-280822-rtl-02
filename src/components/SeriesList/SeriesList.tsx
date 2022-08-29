import { useState, useEffect } from 'react';
import { getAllSeriesFetch } from '../../services';
import { SerieCard } from '../';
import { ISerie } from '../../models';
import { ListWrapper } from './StyledComponents';

export const SeriesList = () => {
  const [series, setSeries] = useState<ISerie[]>();

  useEffect(() => {
    getAllSeriesFetch()
      .then(data => setSeries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListWrapper>
      {series && series.map(serie => <SerieCard key={serie.id} serie={serie} />)}
    </ListWrapper>
  );
};
