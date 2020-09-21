export const state = () => ({
  data: [],
})
export const mutations = {
  async setData (state, res) {
    state.data = res;
  },
}
export const actions = {
  async getData ({ commit }) {
    const data = ["1", "2", "3", "4", "5"];

    commit("setData", data);
  },
}
export const getters = {
  data: state => {
    return state.data;
  },
}