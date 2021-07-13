import axios from 'axios'
const prefixPath = "http://localhost:8081"

export default {
  login() {
    localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyYjQyYWJiYi1lZmQ1LTQ1NTEtOWJmMC00OGZiNjI0MTJhZGUiLCJzdWIiOiJ7XCJ1c2VyVHlwZVwiOlwiSU5URVJOX1NMU1wiLFwiY2xpZW50U291cmNlVHlwZVwiOlwiXCIsXCJ1c2VyTmFtZVwiOlwiYWQxc2FsZXNcIn0iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIzOTg2MDk3LCJleHAiOjE5Njk1ODYwOTd9.CG63NwD7Tid5kdK1lTGbrUyjZ32uYilU1ZrsBWDrxJSpFR_ra_DaPhbnPy0-Wf9QHyQlU_fYvH6Hu2APUV7ZMg')
    // commit('auth_success')
  },

  TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
  },
  // getFeatures({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     commit('startLoading')
  //     axios.post(`${prefixPath}/api/ad1sales/user-mgmt/v1/getFeature`, {}, {
  //       headers: {
  //         'client-source-type': 'CST_WEB',
  //         'Authorization': state.tokenWeb,
  //         'user-type': state.userTypeWeb,
  //       }
  //     })
  //       .then(response => {
  //         commit('setFeatures', { features: response.data.data })
  //         commit('stopLoading')
  //         resolve(response)
  //       })
  //       .catch(err => {
  //         commit('stopLoading')
  //         reject(err)
  //       })
  //   })
  // },
  getProvinsiAll({commit, state}){
    return new Promise((resolve, reject) => {
      axios.post(`${prefixPath}/api/commonservice/autogenerate/v1/ProvinsiAll`, {
        headers : {
          'Authorization' : state.token,
        }
      })
      .then(response => {
        console.log("RESPONSE", response.data.data)
        commit('setProvinsiAll', response.data.data)
        resolve(response)
      })
      .catch(err => {
        console.log("why ? ",err)
        reject(err)
      })
    })
  }
}