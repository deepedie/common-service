<template>
  <v-container fluid class="white px-8 pt-8">
      <v-select></v-select>
      <h1>test</h1>
      <v-btn :color="color">asd</v-btn>
      
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
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import axios from 'axios'

export default {
    data(){
        return{
            isDisabled: false,
            color: 'yellow',
            dialog: false,
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
        console.log("AKSES STATE", this.$store.state.cariIni)
        this.loadProvinsi()
        this.cariData()
    },
    methods: {
        ...mapActions(['getProvinsiAll']),
        loadProvinsi(){
            this.getProvinsiAll()
            // this.$store.dispatch('getProvinsiAll')
        },
        cariData(){
            console.log("MENCARI DATA ....")
        },
    },
    computed: {
        ...mapState(['allProvinsi'])
       
    }
}
</script>

<style>

</style>