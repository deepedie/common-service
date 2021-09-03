<template>
  <v-app class="pa-6">
    <Header />
    <Sidebar />
    <v-main class="content">
      <router-view/>
    </v-main>
    <Footer />
  </v-app> 
</template>

<script>
import Header from "@/components/Header/Header"
import Sidebar from "@/components/Sidebar/Sidebar"
import Footer from "@/components/Footer/Footer"

export default {
  name: 'Layout',
  components: {Header, Sidebar, Footer},
  data: () => ({
    //
  }),
};
</script>
<style src="./Layout.scss" lang="scss"/>
