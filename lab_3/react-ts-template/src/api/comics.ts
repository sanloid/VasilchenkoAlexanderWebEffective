import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';

// Types
import { ComicsResponse } from 'types/api/Comics/ComicsResponse';

export default {
  async getComicsList(page: number, limit: number): Promise<ComicsResponse> {
    const ts = Date.now();
    const response = await axios.get(`/comics`, {
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
  async getComics(id: string): Promise<ComicsResponse> {
    const ts = Date.now();
    const response = await axios.get(`/comics/${id}`, {
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
  ): Promise<ComicsResponse> {
    const ts = Date.now();
    const response = await axios.get(`/comics`, {
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
  }
};
