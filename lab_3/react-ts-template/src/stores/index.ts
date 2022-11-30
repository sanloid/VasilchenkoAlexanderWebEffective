import CharStore from './SubStore/CharStore';
import ComicsStore from './SubStore/ComicsStore';
import SeriesStore from './SubStore/SeriesStore';

export default {
  CharStore: new CharStore(),
  ComicsStore: new ComicsStore(),
  SeriesStore: new SeriesStore()
};

export type StoresType = CharStore | ComicsStore | SeriesStore;
