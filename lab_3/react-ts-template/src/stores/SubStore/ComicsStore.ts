import { action } from 'mobx';
import Store from 'stores/Store';

class ComicsStore extends Store {
  apiPath: string = 'comics';

  contentList: string[] = ['characters'];
}
export default ComicsStore;
