import { createStore } from "vuex";
import axios from "axios";
const currentHost = "langbiang-farm-backend-api.vercel.app/api";
const protocol = "https";

export const store = createStore({
  state: {
    // items: [],
    // token: localStorage.getItem("token") || "",
    products: [],
  },
  mutations: {
    // updateItem(state, items) {
    //   state.items = items;
    // },
    // newItem(state, item) {
    //   state.items.push(item);
    // },
    // auth(state, token) {
    //   state.token = token;
    // },
    // logout(state) {
    //   state.token = "";
    //   localStorage.clear("token");
    // },
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      let dataToGet = (await axios.get(`${protocol}://${currentHost}/products`))
        .data;
      commit("updateProducts", dataToGet);
    },
    // async addItem({ commit }, dataToPost) {
    //   axios.post(`http://${currentHost}/items`, dataToPost);
    //   commit("newItem", dataToPost);
    // },
    // /* eslint-disable  no-unused-vars */
    // async getItem({ commit }, id) {
    //   const response = await axios.get(`http://${currentHost}/items/${id}`);
    //   return response.data;
    // },
    // async register({ commit }, regData) {
    //   try {
    //     let token = (
    //       await axios.post(`http://${currentHost}/registers`, regData)
    //     ).data;
    //     localStorage.setItem("token", token);
    //     axios.defaults.headers.common["Authorization"] = token;
    //     commit("auth", token);
    //     return "registered";
    //   } catch (error) {
    //     console.log(error.toJSON());
    //     return error.code;
    //   }
    // },
    // async login({ commit }, regData) {
    //   try {
    //     let token = (await axios.post(`http://${currentHost}/login`, regData))
    //       .data;
    //     localStorage.setItem("token", token);
    //     axios.defaults.headers.common["Authorization"] = token;
    //     commit("auth", token);
    //     return "Logged In";
    //   } catch (error) {
    //     console.log(error.toJSON());
    //     return error.response.data.error;
    //   }
    // },
  },
});
