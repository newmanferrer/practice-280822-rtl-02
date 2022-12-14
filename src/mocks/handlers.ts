import { rest } from 'msw';
import { ISerie } from '../models';

export const handlers = [
  rest.get<ISerie[]>('https://peticiones.online/api/series', (_req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Juego de Tronos',
          creator: 'David Benioff, D.B. Weiss',
          rating: 9.2,
          dates: '2011-2019',
          image: 'https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg',
          channel: 'HBO'
        },
        {
          id: 2,
          title: 'Breaking Bad',
          creator: 'Vince Gilligan',
          rating: 9.4,
          dates: '2008-2013',
          image: 'https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg',
          channel: 'AMC'
        },
        {
          id: 3,
          title: 'Stranger Things',
          creator: 'Matt Duffer, Ross Duffer',
          rating: 8.7,
          dates: '2016-',
          image: 'https://es.web.img3.acsta.net/pictures/19/06/04/16/39/4888520.jpg',
          channel: 'Netflix'
        }
      ])
    );
  }),
  rest.post<ISerie>('https://peticiones.online/api/series', (_req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        id: 19,
        title: 'My serie title',
        creator: 'My serie creator',
        rating: 10,
        dates: 'My serie dates',
        image: 'My serie image url',
        channel: 'My serie channel'
      })
    );
  })
];
