import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';

// Types
import { CharResponse } from 'types/api/Characters/CharResponse';
import { CharComicsResponse } from 'types/api/Characters/CharComicsResponse';
import { CharSeriesResponse } from 'types/api/Characters/CharSeriesResponse';

export default {
  async getCharList(page: number, limit: number): Promise<CharResponse> {
    const ts = Date.now();
    const response = axios.get(`/characters`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts,
        offset: (page - 1) * limit,
        limit
      }
    });
    return response.then((data) => data.data);
  },
  async getChar(id: string): Promise<CharResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters/${id}`, {
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
  ): Promise<CharResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        nameStartsWith: name,
        offset: (page - 1) * limit,
        limit,
        ts
      }
    });
    return response.data;
  },
  async charSeries(id: string): Promise<CharSeriesResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters/${id}/series`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts
      }
    });
    return response.data;
  },
  async charComics(id: string): Promise<CharComicsResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters/${id}/comics`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts
      }
    });
    return response.data;
  }
};
