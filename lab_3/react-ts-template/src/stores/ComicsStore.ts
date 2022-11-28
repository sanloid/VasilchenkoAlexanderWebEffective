import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';

// Types
import { ComicsResponse } from 'types/api/ComicsResponse';

class ComicsStore {
  @observable
  comicsResponse: ComicsResponse;

  @observable
  oneComicsResponse: ComicsResponse;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  @observable
  pageLimit: number;

  @observable
  comicsOnPage: number = 18;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getComicsList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.comics.getComicsList(
        Number(page),
        this.comicsOnPage
      );

      runInAction(() => {
        this.comicsResponse = response;
        this.pageLimit = Math.ceil(response.data.total / this.comicsOnPage);
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
  getComics = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;
      const response = await api.comics.getComics(id);

      runInAction(() => {
        this.oneComicsResponse = response;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };
}
export default ComicsStore;
