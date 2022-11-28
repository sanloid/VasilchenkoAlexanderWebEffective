import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';

// Types
import { CharResponse } from 'types/api/CharResponse';

export default {
  async getCharList(page: number, limit: number): Promise<CharResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters`, {
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
  }
};
