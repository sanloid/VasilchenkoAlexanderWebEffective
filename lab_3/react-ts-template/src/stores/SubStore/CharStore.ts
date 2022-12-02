import { action } from 'mobx';
import Store from 'stores/Store';

class CharStore extends Store {
  apiPath: string = 'characters';

  contentList: string[] = ['comics', 'series'];
}
export default CharStore;
