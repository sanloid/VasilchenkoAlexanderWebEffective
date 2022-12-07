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

  apiPath: string = '';

  contentList: string[] = [];

  constructor(apiPath: string, contentList: string[]) {
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
    this.apiPath = apiPath;
    this.contentList = contentList;
  }

  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.common.getList(
        Number(page),
        this.OnPage,
        this.apiPath
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

  getOne = async (id: string): Promise<void> => {
    try {
      runInAction(() => {
        this.loadingOne = true;
      });

      const response = await api.common.getOne(id, this.apiPath);

      runInAction(() => {
        this.oneResponse = response;
        this.contentList.forEach(async (e) => {
          this.content.set(e, await api.common.getContent(id, this.apiPath, e));
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
        this.apiPath,
        this.apiPath === 'characters' ? 'name' : 'title'
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
