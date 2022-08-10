import axios from 'axios';

class Requester {
  constructor() {
    this.requester = axios.create({
      baseURL: 'https://us-central1-minka-web.cloudfunctions.net/actions',
    });
  }

  get(path, params) {
    return this.requester({
      method: 'GET',
      url: path,
      params: params,
    })
  }

  post(path, body) {
    return this.requester({
      method: 'POST',
      url: path,
      data: body,
    })
  }
}

export default new Requester();