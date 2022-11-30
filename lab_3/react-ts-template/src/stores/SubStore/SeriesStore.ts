import { action } from 'mobx';
import Store from 'stores/Store';

class SeriesStore extends Store {
  getApiPath = action((): string => {
    return 'series';
  });

  getContentList = action((): string[] => {
    return ['characters', 'comics'];
  });
}
export default SeriesStore;
