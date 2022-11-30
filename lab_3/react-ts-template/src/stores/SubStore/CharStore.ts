import { action } from 'mobx';
import Store from 'stores/Store';

class CharStore extends Store {
  getApiPath = action((): string => {
    return 'characters';
  });

  getContentList = action((): string[] => {
    return ['comics', 'series'];
  });
}
export default CharStore;
