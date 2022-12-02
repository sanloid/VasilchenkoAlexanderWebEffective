import Store from './Store';

export default {
  CharStore: new Store('characters', ['comics', 'series']),
  ComicsStore: new Store('comics', ['characters', 'comics']),
  SeriesStore: new Store('series', ['characters'])
};
