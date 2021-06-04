<template>
  <v-app class="main">
    <Header />
    <Sidebar />
    <v-content class="mx-5">
      <router-view/>
    </v-content>
  </v-app> 
</template>

<script>
import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"

export default {
  name: 'App',
  components: {Header, Sidebar},
  data: () => ({
    //
  }),
};
</script>
<style src="./styles/app.scss" lang="scss"/>
