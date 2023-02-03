// file for all api calls

import axios from "axios";
import localStorage from "./localStorage";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

class Query {
  static copyDatas(datas, copyArr) {
    for (let i = 0; i < datas.length; i += 1) {
      copyArr.push(datas[i]);
    }
  }

  static getUsers() {
    const users = [];
    api
      .get("/users")
      .then(({ data }) => this.copyDatas(data, users))
      .catch((err) => {
        console.error(err);
      });

    return users;
  }

  static async login(loginForm) {
    const currentUser = {};

    await api
      .post("/login", loginForm)
      .then(({ data }) => {
        currentUser.user = data;
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
        currentUser.user = data;
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
      .then(({ data }) => this.copyDatas(data, videos))
      .catch((err) => {
        console.error(err);
      });

    return videos;
  }

  static async getFilteredVideos(selectedRadio, videosFilter) {
    const videos = [];

    await api
      .get(`/videos?category_id=${selectedRadio}&needle=${videosFilter}`)
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

  static async getFavVideos(userID) {
    const videos = [];

    await api
      .get(`/favoris/${userID}`)
      .then(({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          videos.push({ ...data[i], isFav: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return videos;
  }

  static handleFav(userID, videoID) {
    api.put(`/favoris`, { userID, videoID }).catch((err) => console.error(err));
  }

  static async getAvatars() {
    const avatars = [];
    await api
      .get("/avatars")
      .then(({ data }) => this.copyDatas(data, avatars))
      .catch((err) => {
        console.error(err);
      });

    return avatars;
  }
}

export default Query;
