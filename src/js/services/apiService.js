const baseUrl = 'https://pixabay.com/api/';
export default {
  page: 1,
  query: '',
  key: '20415428-bf9b7db865d7d385cdf74d6e6',
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(baseUrl + requestParams)
      .then(res => res.json())
      .then(pars => {
        this.addPage();
        return pars.hits;
      })
      .catch(error => console.warn(error));
  },

  get serchQuery() {
    return this.query;
  },
  set serchQuery(string) {
    this.query = string;
  },
  addPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
