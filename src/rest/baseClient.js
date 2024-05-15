import axios from "axios";
import { ACCESS_TOKEN, LOCAL_URL } from "constant";
import { readCookie } from "utils/cookies.js";
import { objectToFormData } from "utils/index.js";

// calling class oop constant call api
export default class Client {
  constructor(server = LOCAL_URL) {
    this.baseUrl = server;
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // chặn việc gửi yêu cầu đi, và thêm vào header cho nó có bên beartoken
    this.client.interceptors.request.use(async (config) => {
      let access_token = readCookie(ACCESS_TOKEN);

      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    });
  }

  async get(url, payload) {
    let res = {};
    try {
      res = await this.client.get(url, payload || {});
    } catch (e) {
      throw e;
    }
    return res;
  }

  async post(url, payload, config) {
    let res = {};
    try {
      res = await this.client.post(url, payload || {}, config);
    } catch (e) {
      throw e;
    }
    return res;
  }

  async put(url, payload) {
    let res = {};
    try {
      res = await this.client.put(url, payload || {});
    } catch (e) {
      throw e;
    }
    return res;
  }

  async delete(url, payload) {
    let res = {};
    try {
      res = await this.client.delete(url, payload || {});
    } catch (e) {
      throw e;
    }
    return res;
  }

  async patch(url, payload, config) {
    let res = {};
    try {
      res = await this.client.patch(url, payload || {}, config);
    } catch (e) {
      throw e;
    }
    return res;
  }

  async postForm(url, payload) {
    let res = {};
    const formData = objectToFormData(payload);
    try {
      res = await this.client.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      throw e;
    }
    return res;
  }
}
