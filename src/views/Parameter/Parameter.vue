<template>
  <v-container fluid class="white px-8 pt-8">
      <h1>test</h1>
      <v-btn :color="color">asd</v-btn>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            isDisabled: false,
            color: 'red'
        }
    }
}
</script>

<style>

</style>