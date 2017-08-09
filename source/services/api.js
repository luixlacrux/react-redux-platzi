import fetchHelper from '../utils/fetchHelper';

const baseURL = 'http://jsonplaceholder.typicode.com';

const api = {
  posts: {
    async getList(page = 1) {
      const response = await fetchHelper(`${baseURL}/posts?_page=${page}`);
      return response;
    },
    async getSingle(id = 1) {
      const response = await fetchHelper(`${baseURL}/posts/${id}`);
      return response;
    },
    async getComments(id = 1) {
      const response = await fetchHelper(`${baseURL}/posts/${id}/comments`);
      return response;
    },
  },

  users: {
    async getSingle (id = 1) {
      const response = await fetchHelper(`${baseURL}/users/${id}`);
      return response
    },
    async getPosts (id = 1) {
      const response = await fetchHelper(`${baseURL}/posts?userId=${id}`);
      return response
    },
  }
}

export default api