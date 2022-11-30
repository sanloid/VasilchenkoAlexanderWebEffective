import { action } from 'mobx';
import Store from 'stores/Store';

class ComicsStore extends Store {
  getApiPath = action((): string => {
    return 'comics';
  });

  getContentList = action((): string[] => {
    return ['characters'];
  });
}
export default ComicsStore;
