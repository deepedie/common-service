export default {
  toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  setFeatures(state, { features }) {
    state.features = features
  },
  setProvinsiAll(state, payload){
    state.allProvinsi = payload
  },
}