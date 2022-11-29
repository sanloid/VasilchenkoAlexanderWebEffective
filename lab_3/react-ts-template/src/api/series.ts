import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';

// Types
import { SeriesResponse } from 'types/api/Series/SeriesResponse';
import { SeriesCharacterResponse } from 'types/api/Series/SeriesCharacterResponse';
import { SeriesComicsResponse } from 'types/api/Series/SeriesComicsResponse';

export default {
  async getSeriesList(page: number, limit: number): Promise<SeriesResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts,
        offset: (page - 1) * limit,
        limit
      }
    });
    return response.data;
  },
  async getSeries(id: string): Promise<SeriesResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series/${id}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts,
        limit: 1
      }
    });
    return response.data;
  },
  async searchByName(
    name: string,
    limit: number,
    page: number
  ): Promise<SeriesResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        titleStartsWith: name,
        offset: (page - 1) * limit,
        limit,
        ts
      }
    });
    return response.data;
  },
  async seriesChar(id: string): Promise<SeriesCharacterResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series/${id}/characters`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts
      }
    });
    return response.data;
  },
  async seriesComics(id: string): Promise<SeriesComicsResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series/${id}/comics`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts
      }
    });
    return response.data;
  }
};
