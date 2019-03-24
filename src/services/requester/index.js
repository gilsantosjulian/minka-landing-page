export default class Requester {
  constructor(fetch) {
    this.fetch = fetch;
  }

  get(url) {
    return this.fetch
      .get(url)
      .then(this.errorHandler)
      .then((data) => data)
      .catch((error) => error);
  }

  post(url, body) {
    return this.fetch
      .post(url, body)
      .then(this.errorHandler)
      .then((data) => data)
      .catch((error) => error);
  }

  errorHandler = (response) => {
    switch (response.status) {
      case 200:
      case 201:
        return response.data;

      default:
        return response;
    }
  };
}
