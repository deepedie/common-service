import axios from 'axios'
const prefixPath = ""
const adiraKey = ""

export default {
  TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
  },
  getFeatures({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('startLoading')
      axios.post(`${prefixPath}/api/ad1sales/user-mgmt/v1/getFeature`, {}, {
        headers: {
          'client-source-type': 'CST_WEB',
          'Authorization': state.tokenWeb,
          'user-type': state.userTypeWeb,
          'X-ADIRA-Key': adiraKey
        }
      })
        .then(response => {
          commit('setFeatures', { features: response.data.data })
          commit('stopLoading')
          resolve(response)
        })
        .catch(err => {
          commit('stopLoading')
          reject(err)
        })
    })
  },
}