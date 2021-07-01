<template>
  <v-container fluid class="white px-8 pt-8">
    <v-row style="border-bottom: 2px inset #efefef">
      <p class="textColor--text">
        <v-icon class="blue--text mb-1 ml-3">mdi-home</v-icon>
        <v-icon>mdi-circle-small</v-icon>
        Group Master
      </p>
      <v-spacer></v-spacer>
      <v-btn
        text
        small
        color="blue"
      >
        <p small class="pt-5"><v-icon class="mb-1 pa-0" x-small>mdi-plus</v-icon>ADD</p>
      </v-btn>
    </v-row>
    <v-col cols="12" class="mt-10">
      <v-row>
        <v-text-field class="mr-5" dense outlined></v-text-field>
        <v-btn elevation="0" color="blue white--text" medium>Search</v-btn>
      </v-row>
    </v-col>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :header-props="{ sortIcon: null }"
        >
          <template v-slot:item="data">
            <tr>
              <td>{{ data.item.id}}</td>
              <td>{{ data.item.username}}</td>
              <td>{{ data.item.job}}</td>
              <td>{{ data.item.area}}</td>
              <td>{{ data.item.cluster}}</td>
              <td>{{ data.item.cabang}}</td>
              <td align="center">
                <v-dialog v-model="dialogUser" persistent max-width="500px">
                    <template v-slot:activator="{ on, attrs}">
                    <v-btn 
                        icon
                        class="blue--text"
                        v-on="on"
                        v-bind="attrs"
                    >
                        <v-icon small>mdi-account</v-icon>
                    </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Select User</span>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-close</v-icon>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-select class="mb-0" hide-details outlined dense label="Internal"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-select class="mb-0" hide-details outlined dense label="User ID"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field class="mb-0" outlined dense label="Enter Search Criteria" append-icon="mdi-magnify"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-col>
                                    <v-data-table :headers="userHeaders"></v-data-table>
                                </v-col>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-col class="text-right">
                            <v-btn
                                block
                                color="btnGray"
                                class="white--text"
                                @click="dialogUser = false"
                            >
                                Cancel
                            </v-btn>
                            </v-col>
                            <!-- <v-spacer></v-spacer> -->
                            <v-col>
                            <v-btn
                                block
                                color="primary"
                                @click="dialogUser = false"
                            >
                                Save
                            </v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                    <v-btn icon>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      dialog:false,
      dialogUser: false,
      headers: [
        {
          text: "User ID",
          align: "start",
          value: "name",
          width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Username",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Job",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Area",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Cluster",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Cabang",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Action",
          align: "center",
          // width: "250px",
          class: "tableHeader black--text",
        },
      ],
      items: [
        {
          id : '123fds24123f2f',
          username: 'author123',
          job: 'secret',
          area: '21-Half Street',
          cluster: '-',
          cabang: 'Cibinong',
        },
        {
          id : '1h242h12sdf2f',
          username: 'author198',
          job: 'secret01',
          area: '22 whale Street',
          cluster: '-',
          cabang: 'Cidory',
        }
      ],
      userHeaders: [
        {
          text: "User ID",
          align: "start",
          value: "name",
          width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Username",
          // width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Job",
          // width: "150px",
          class: "tableHeader black--text",
        },
      ]
    }
  }
}
</script>

<style src="./GroupMaster.scss" lang="scss"/>