export default {
  toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  setFeatures(state, { features }) {
    state.features = features
  },
}