import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';
import { SeriesResponse } from 'types/api/Series/SeriesResponse';
import { SeriesCharacterResponse } from 'types/api/Series/SeriesCharacterResponse';
import { SeriesComicsResponse } from 'types/api/Series/SeriesComicsResponse';

// Types

class SeriesStore {
  @observable
  Response: SeriesResponse;

  @observable
  oneResponse: SeriesResponse;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  @observable
  pageLimit: number;

  @observable
  OnPage: number = 6;

  @observable
  seriesChar: SeriesCharacterResponse;

  @observable
  seriesComics: SeriesComicsResponse;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.series.getSeriesList(
        Number(page),
        this.OnPage
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

  @action
  getOne = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;
      const response = await api.series.getSeries(id);
      const chars = await api.series.seriesChar(id);
      const comics = await api.series.seriesComics(id);

      runInAction(() => {
        this.oneResponse = response;
        this.seriesChar = chars;
        this.seriesComics = comics;
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

      const response = await api.series.searchByName(
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
export default SeriesStore;
