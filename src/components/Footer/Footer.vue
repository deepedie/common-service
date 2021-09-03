<template>
  <v-footer class="px-0">
    <v-row no-gutters>
      <v-row>
        <!-- <v-btn
              v-for="link in links"
              :key="link.link"
              color="primary"
              text
              :href="link.link"
              class="text-capitalize ml-1 font-weight-regular"
          >
            {{ link.text }}
          </v-btn> -->
          <v-btn
              color="white"
              text
              class="text-capitalize ml-6 font-weight-regular"
          >
            Ad1ComSer,Procat,CreditSim &copy; 2021
          </v-btn>
          <h5 class="white--text mr-15">Bantuan</h5>
      </v-row>
    </v-row>
  </v-footer>
</template>

<script>
// import config from '../../config';

export default {
  name: 'Footer',

  data: () => ({
    // config,
    links: [
      {text: 'Ad1ComSer,Procat,CreditSim &copy; 2021', link: 'https://whiteopen.com/'}
    ]
  }),
}
</script>

<style src="./Footer.scss" lang="scss"/>

