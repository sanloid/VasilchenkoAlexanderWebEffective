import { action } from 'mobx';
import Store from 'stores/Store';

class SeriesStore extends Store {
  apiPath: string = 'series';

  contentList: string[] = ['characters', 'comics'];
}
export default SeriesStore;
