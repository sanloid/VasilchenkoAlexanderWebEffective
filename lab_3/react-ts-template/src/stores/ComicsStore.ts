import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';

// Types
import { ComicsResponse } from 'types/api/Comics/ComicsResponse';
import { ComicsCharacterResponse } from 'types/api/Comics/ComicsCharacterResponse';

class ComicsStore {
  @observable
  Response: ComicsResponse;

  @observable
  oneResponse: ComicsResponse;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  @observable
  pageLimit: number;

  @observable
  OnPage: number = 6;

  @observable
  comicsChar: ComicsCharacterResponse;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.comics.getComicsList(
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
  getComics = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;
      const response = await api.comics.getComics(id);
      const char = await api.comics.comicsChar(id);

      runInAction(() => {
        this.oneResponse = response;
        this.comicsChar = char;
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

      const response = await api.comics.searchByName(
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
export default ComicsStore;
