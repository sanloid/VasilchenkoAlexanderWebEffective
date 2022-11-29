import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';
import { SeriesResponse } from 'types/api/SeriesResponse';

// Types

class SeriesStore {
  @observable
  seriesResponse: SeriesResponse;

  @observable
  oneSeriesResponse: SeriesResponse;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  @observable
  pageLimit: number;

  @observable
  seriesOnPage: number = 6;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getSeriesList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.series.getSeriesList(
        Number(page),
        this.seriesOnPage
      );

      runInAction(() => {
        this.seriesResponse = response;
        this.pageLimit = Math.ceil(response.data.total / this.seriesOnPage);
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
  getSeries = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;
      const response = await api.series.getSeries(id);

      runInAction(() => {
        this.oneSeriesResponse = response;
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
        this.seriesOnPage,
        Number(page)
      );

      runInAction(() => {
        this.seriesResponse = response;
        this.pageLimit = Math.ceil(response.data.total / this.seriesOnPage);
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
