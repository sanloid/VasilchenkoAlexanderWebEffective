import { observable, action, runInAction, makeAutoObservable } from 'mobx';

// API
import api from 'api';

// Types
import { CharResponse } from 'types/api/CharResponse';

class CharStore {
  @observable
  charResponse: CharResponse;

  @observable
  oneCharResponse: CharResponse;

  @observable
  pageLimit: number;

  @observable
  charsOnPage: number = 18;

  @observable
  loadingList: boolean = false;

  @observable
  loadingOne: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getCharList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.chars.getCharList(
        Number(page),
        this.charsOnPage
      );

      runInAction(() => {
        this.charResponse = response;
        this.pageLimit = Math.ceil(response.data.total / this.charsOnPage);
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
  getChar = async (id: string): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });
      const response = await api.chars.getChar(id);

      runInAction(() => {
        this.oneCharResponse = response;
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

export default CharStore;
