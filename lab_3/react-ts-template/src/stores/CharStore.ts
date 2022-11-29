import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';

// Types
import { CharResponse } from 'types/api/Characters/CharResponse';
import { CharComicsResponse } from 'types/api/Characters/CharComicsResponse';
import { CharSeriesResponse } from 'types/api/Characters/CharSeriesResponse';

class CharStore {
  @observable
  Response: CharResponse;

  @observable
  oneResponse: CharResponse;

  @observable
  pageLimit: number;

  @observable
  OnPage: number = 6;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  @observable
  charComics: CharComicsResponse;

  @observable
  charSeries: CharSeriesResponse;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.chars.getCharList(Number(page), this.OnPage);

      runInAction(() => {
        this.Response = response;
        this.pageLimit = Math.ceil(response.data.total / this.OnPage);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingList = false;
      });
    }
  };

  @action
  getOne = async (id: string): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });
      const response = await api.chars.getChar(id);
      const comics = await api.chars.charComics(id);
      const series = await api.chars.charSeries(id);

      runInAction(() => {
        this.oneResponse = response;
        this.charComics = comics;
        this.charSeries = series;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };

  @action
  searchByName = async (name: string, page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.chars.searchByName(
        name,
        this.OnPage,
        Number(page)
      );

      runInAction(() => {
        this.Response = response;
        this.pageLimit = Math.ceil(response.data.total / this.OnPage);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingList = false;
      });
    }
  };
}

export default CharStore;
