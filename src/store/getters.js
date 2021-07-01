export default {
    authorized: state => !!state.token,
    authstatus: state => state.authStatus,
    drawer_state: state => state.drawer,
}