import axios, { AxiosResponse } from 'axios';
import { ISerie } from '../../models';

const baseURL = ' https://peticiones.online/api/';
const allSeries = `${baseURL}/series/`;

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
  }
}

//* FETCH
export const getAllSeriesFetch = async (): Promise<ISerie[]> => {
  try {
    const response = await fetch(allSeries);
    if (!response.ok) throw new NetworkError(`Error code: ${response.status}`);
    const data: ISerie[] = await response.json();
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

export const createSerieFetch = async (serie: ISerie) => {
  try {
    const response = await fetch(allSeries, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serie)
    });
    return response;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

//* AXIOS
export const getAllSeriesAxios = async (): Promise<ISerie[]> => {
  try {
    const { data }: AxiosResponse<ISerie[], ISerie[]> = await axios.get(allSeries);
    return data;
  } catch (error: any) {
    throw new NetworkError(error.message);
  }
};

//* ---------------------------------------------------------------------------
//* END POINTS
//* ---------------------------------------------------------------------------
//* GET All Series: https://peticiones.online/api/series
//* GET serie by id: https://peticiones.online/api/series/IDSERIE
//* POST Create new serie: https://peticiones.online/api/series
//* PUT Update serie: https://peticiones.online/api/series/IDSERIE
//* DELETE delete serie: https://peticiones.online/api/series/IDSERIE
//* ---------------------------------------------------------------------------
