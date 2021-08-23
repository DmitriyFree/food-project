const server = {
    /**
   *
   * @param {String} url url for post query
   * @returns data from server as Promise
   */
  async getData(url) {
    const res = await fetch(url);

    if(!res.ok) {

    }
    return await res.json();
  },
  /**
   *
   * @param {String} url url for post query
   * @param {JSON} body  data in json format
   * @returns data from server as Promise
   */
  async postData(url, body) {

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: body
    });

    return await res.json();
  }
}

export default server;