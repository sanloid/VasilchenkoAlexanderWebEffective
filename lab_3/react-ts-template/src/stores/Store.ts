import api from 'api';
import { observable, makeObservable, runInAction, action } from 'mobx';
import { ContentType } from 'types/api/ContentType';
import { ResponsesTypes } from 'types/api/ResponsesType';

class Store {
  Response: ResponsesTypes;

  oneResponse: ResponsesTypes;

  pageLimit: number;

  OnPage: number = 9;

  loadingList: boolean;

  loadingOne: boolean;

  content: Map<string, ContentType> = new Map<string, ContentType>();

  constructor() {
    makeObservable(this, {
      Response: observable,
      oneResponse: observable,
      pageLimit: observable,
      OnPage: observable,
      loadingList: observable,
      loadingOne: observable,
      content: observable,
      getList: action,
      getOne: action,
      searchByName: action
    });
  }

  getApiPath = action((): string => {
    return '';
  });

  queryStartsWith = action((): string => {
    return '';
  });

  getContentList = action((): string[] => {
    return [];
  });

  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.common.getList(
        Number(page),
        this.OnPage,
        this.getApiPath()
      );

      runInAction(() => {
        console.log(response);
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

  getOne = async (id: string): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });

      const response = await api.common.getOne(id, this.getApiPath());

      runInAction(() => {
        console.log(response);
        this.oneResponse = response;
        this.getContentList().forEach(async (e) => {
          this.content.set(
            e,
            await api.common.getContent(id, this.getApiPath(), e)
          );
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };

  searchByName = async (name: string, page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.common.searchByName(
        name,
        this.OnPage,
        Number(page),
        this.getApiPath(),
        this.getApiPath() === 'characters' ? 'name' : 'title'
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

export default Store;
