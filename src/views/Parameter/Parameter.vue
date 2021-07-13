<template>
  <v-container fluid class="white px-8 pt-8">
      <v-select></v-select>
      <h1>test</h1>
      <v-btn :color="color">asd</v-btn>
      
      <v-text-field v-model="provinsiId"></v-text-field>
      <v-text-field v-model="provinsiName"></v-text-field>
      <v-btn @click="searchProvinsi"></v-btn>
      <v-data-table
          :headers="headers"
          :items="allProvinsi"
          :header-props="{ sortIcon: null }"
        >
          <template v-slot:item="data">
            <tr>
              <td>{{ data.item.PARA_PROVINSI_ID}}</td>
              <td>{{ data.item.PARA_PROVINSI_NAME}}</td>
              <td align="center">
                <v-btn icon :to="`/approval-workflow/${data.item.approval}/form`">
                    <v-icon class="blue--text" small>
                        mdi-pencil
                    </v-icon>    
                </v-btn>
                <v-dialog
                  v-model="dialog"
                  persistent
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-on="on" v-bind="attrs">
                        <v-icon
                            class="blue--text"
                            small
                        >mdi-delete
                        </v-icon>
                    </v-btn>
                    </template>
                  <div class="text-center">
                <v-sheet
                  class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
                  color="blue-grey darken-3"
                >
                  <div class="grey--text text--lighten-1 text-body-2 mb-4">
                    Yakin untuk menghapus
                    {{ data.item.id }} ?
                  </div>

                  <v-btn
                    class="ma-1"
                    color="primary"
                    text
                    @click="dialog=false"
                  >
                    Tidak
                  </v-btn>

                  <v-btn
                    class="ma-1"
                    color="primary"
                    text
                    @click="
                      removeStopSellingUser(
                        allStopSellingUsers.item.internalId
                      ),
                        $set(
                          dialogDel,
                          allStopSellingUsers.item.internalId,
                          false
                        )
                    "
                  >
                    Ya
                  </v-btn>
                </v-sheet>
              </div>
                </v-dialog>
              </td>

            </tr>
          </template> 
        </v-data-table>
        <!-- V-FOR -->
        <ul v-for="provinsi in allProvinsi" :key="provinsi.PARA_PROVINSI_ID">
          <li>{{ provinsi.PARA_PROVINSI_NAME }} {{ provinsi.PARA_PROVINSI_ID}}</li>
        </ul>

        <!-- Request Body Action -->
        <v-text-field
          class="mt-10"
          dense
          outlined
          v-model="provinsiId"
          label="Provinsi ID"
          hide-details
          placeholder=" "
          >
        </v-text-field>
        <v-btn @click="findProvinsi" dense class="black--text mb-5" color="yellow">Submit</v-btn>

        <li>{{ provinsiByCode.PARA_PROVINSI_NAME }} {{ provinsiByCode.PARA_PROVINSI_ID}}</li>

        <p>NAMA PROVINSI : {{ namaProvinsi }}</p>

        <p v-if="show">HELLO !</p>

  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import axios from 'axios'

export default {
    data(){
        return{
          show: false,
            isDisabled: false,
            color: 'yellow',
            dialog: false,
            provinsiId: '',
            provinsiName: '',
            namaProvinsi: '',
            headers: [
                {
                    text: "Provinsi ID",
                    align: "start",
                    value: "name",
                    class: "tableHeader black--text",
                },
                {
                    text: "Provinsi Name",
                    align: "start",
                    value: "name",
                    class: "tableHeader black--text",
                },
                {
                    text: "Action",
                    align: "center",
                    width: "250px",
                    class: "tableHeader black--text",
                },
            ],
        }
    },
    mounted(){
        this.loadProvinsi()
    },
    methods: {
        ...mapActions(['getProvinsiAll', 'getProvinsiByCode']),
        loadProvinsi(){
            this.getProvinsiAll({ 
              PARA_PROVINSI_ID : this.provinsiId,
              PARA_PROVINSI_NAME : this.provinsiName
            })
            // this.$store.dispatch('getProvinsiAll')
        },
        findProvinsi(){
          this.getProvinsiByCode({
            PARA_PROVINSI_ID: this.provinsiId
          })
          .then(res => {
            this.namaProvinsi = res.data.data.PARA_PROVINSI_NAME
            // this.allProvinsi = res.data.data
          })
          .catch((err) => {
            console.log(err)
            this.provinsiByCode.PARA_PROVINSI_NAME = 'DATA TIDAK DITEMUKAN'
          })
        },
    },
    computed: {
        ...mapState(['allProvinsi', 'provinsiByCode'])
       
    }
}
</script>

<style>

</style>