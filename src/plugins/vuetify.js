import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import config from '@/config'
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    }
});
