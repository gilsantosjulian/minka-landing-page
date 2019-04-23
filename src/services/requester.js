import axios from 'axios';

class Requester {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/minka-web/us-central1/actions',
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