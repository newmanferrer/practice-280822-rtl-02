import { CardWrapper, TitleH2, Image, Paragraph } from './StyledComponents';
import { ISerie } from '../../models';

interface ISerieCard {
  serie: ISerie;
}

export const SerieCard = ({ serie }: ISerieCard) => {
  return (
    <CardWrapper key={serie.id}>
      <TitleH2>{serie.title}</TitleH2>
      <Paragraph>Creator: {serie.creator}</Paragraph>
      <Image src={serie.image} alt={serie.title} />
      <Paragraph>Score: {serie.rating}</Paragraph>
      <Paragraph>Channel: {serie.channel}</Paragraph>
    </CardWrapper>
  );
};
