import axios from 'axios'
const prefixPath = "http://localhost:8081"
// axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyYjQyYWJiYi1lZmQ1LTQ1NTEtOWJmMC00OGZiNjI0MTJhZGUiLCJzdWIiOiJ7XCJ1c2VyVHlwZVwiOlwiSU5URVJOX1NMU1wiLFwiY2xpZW50U291cmNlVHlwZVwiOlwiXCIsXCJ1c2VyTmFtZVwiOlwiYWQxc2FsZXNcIn0iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIzOTg2MDk3LCJleHAiOjE5Njk1ODYwOTd9.CG63NwD7Tid5kdK1lTGbrUyjZ32uYilU1ZrsBWDrxJSpFR_ra_DaPhbnPy0-Wf9QHyQlU_fYvH6Hu2APUV7ZMg`
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJkMWNmODY1MS00MDhlLTRiZDItYjEzNS00ZWE3YzVkOTUyMmIiLCJzdWIiOiJ7XCJ1c2VyVHlwZVwiOlwiSU5URVJOX1NMU1wiLFwiY2xpZW50U291cmNlVHlwZVwiOlwiXCIsXCJ1c2VyTmFtZVwiOlwiYWQxc2FsZXNcIn0iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjI2MTQyNzk2LCJleHAiOjMxODEzNDI3OTZ9.b6GR3tQhQZ1JDCq4t3_GHL5sPyIW87U24Zj5NlmuSvIvCiX42wW3qm2LH5-iNsrIx0DaLgGSSkKNx7THbFCGsw`

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
  getProvinsiAll({commit}){
    return new Promise((resolve, reject) => {
      axios.post(`${prefixPath}/api/commonservice/autogenerate/v1/ProvinsiAll`)
      .then(response => {
        commit('setProvinsiAll', response.data.data)
        resolve(response)
      })
      .catch(err => {
        console.log("why ? ",err)
        reject(err)
      })
    })
  },

  getProvinsiByCode({commit}, requestBody){
    return new Promise((resolve, reject) => {
      axios.post(`${prefixPath}/api/commonservice/autogenerate/v1/ProvinsiByCode`, requestBody)
      .then(response => {
        commit('setProvinsiByCode', response.data.data)
        resolve(response)
      })
      .catch(err => {
        console.log("why ? ",err)
        reject(err)
      })
    })
  },
}