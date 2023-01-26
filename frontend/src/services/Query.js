// file for all api calls

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

class Query {
  static getUsers() {
    const users = [];
    api
      .get("/users")
      .then(({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          users.push(data[i]);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return users;
  }

  // TO DO : function for handling datas

  static async login(loginForm) {
    const currentUser = {};

    await api
      .post("/login", loginForm)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        currentUser.user = user;
      })
      .catch((err) => {
        console.error(err);
      });
    return currentUser;
  }

  static async registration(registerForm) {
    const currentUser = {};

    await api
      .post("/users", registerForm)
      .then(({ data }) => {
        const { token, user } = data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        currentUser.user = user;
      })
      .catch((err) => {
        console.error(err);
      });
    return currentUser;
  }

  static async editUser(editedForm, userID) {
    const currentUser = {};

    await api
      .put(`/users/${userID}`, editedForm)
      .then(({ data }) => {
        currentUser.user = data;
      })
      .catch((err) => {
        console.error(err);
      });
    return currentUser;
  }

  static async getAllVideos() {
    const videos = [];
    await api
      .get("/videosfilter")
      .then(({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          videos.push(data[i]);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return videos;
  }
}

export default Query;
