<template>
  <nav>
    <v-app-bar app class="primary">
      <v-app-bar-nav-icon v-if="!DRAWER_STATE" @click.stop="TOGGLE_DRAWER"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!DRAWER_STATE" class="text-uppercase">
        <span class="font-weight-light">Common</span>
        <span class="font-italic font-weight-bold">Service</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat text class="text-capitalize">
        Sign out
        <v-icon small class="ml-1">mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
    <!-- <v-app-bar
        class="main-header"
        height="64"
        fixed
        color="primary"
    >
        <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
        <template v-if="DRAWER_STATE">
            <v-icon  style="font-size: 28px">mdi-arrow-left</v-icon>
        </template>
        <template v-else>
            <v-icon style="font-size: 28px">mdi-menu</v-icon>
        </template>
        </v-btn>
        <v-toolbar-title>{{ this.$store.state.titleApp }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="290">      
        <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="mr-1"
            plain
            text
            v-bind="attrs"
            v-on="on">
            Sign out
            <v-icon style="font-size: 18px; width:24px">mdi-arrow-right</v-icon>
        </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline">
            Yakin untuk Logout?
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Tidak
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="logOut"
                >
                    Ya
                </v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
    </v-app-bar> -->
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    data(){
        return {
            dialog: false,
        }
    },
    computed: {
      ...mapState(['drawer']),
      DRAWER_STATE :{
        get() {
          return this.drawer
        },
      }
    },
    methods: {
      ...mapActions([ 'TOGGLE_DRAWER' ]),
      logOut: function () {
        this.$store.dispatch('logout').then((response) => {
          if(response){
            let data = response.data;
            if(data.status == 0){
              const snackbarMsg = data.message
              const snackbarColor = 'red'
              this.$store.commit('setShowSnackbar', { snackbarMsg, snackbarColor })
            } else {
              const snackbarMsg = data.message
              const snackbarColor = 'green'
              this.$store.commit('setShowSnackbar', { snackbarMsg, snackbarColor })
              this.$router.push(`/`)
            }
          }
        }).catch(error => {
        if (error.response) {
          let response = error.response;
          let hasToken = !!response.config.headers.Authorization;
          switch(response.status){
            case 403 : if (hasToken){
                this.$store.commit('logout')
                this.$router.push(`${process.env.VUE_APP_PREFIX_ROUTE_PATH}/`)
              }
            }
          }
      });
      }
    }
}
</script>

<style src="./Header.scss" lang="scss"></style>
