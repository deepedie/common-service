<template>
  <v-container fluid class="white px-8 pt-8">
    <v-row style="border-bottom: 2px inset #efefef">
      <p class="textColor--text">
        <v-icon class="blue--text mb-1 ml-3">mdi-home</v-icon>
        <v-icon>mdi-circle-small</v-icon>
        Approval Reassignment Search
      </p>
    </v-row>
    <v-col cols="12" class="mt-10">
      <v-row>
          <v-col cols="5">
              <v-row>
                <v-select class="mr-4" dense outlined label="Tipe Monitoring"></v-select>
              </v-row>
          </v-col>
          <v-col cols="7">
            <v-row>
                <v-text-field class="mr-5" dense outlined label="Code"></v-text-field>
                <v-btn elevation="0" color="blue white--text" medium>Search</v-btn>
            </v-row>
          </v-col>
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
              <td>{{ data.item.approval}}</td>
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
          text: "Approval Workflow",
          align: "start",
          value: "name",
        //   width: "150px",
          class: "tableHeader black--text",
        },
        {
          text: "Action",
          align: "center",
          width: "250px",
          class: "tableHeader black--text",
        },
      ],
      items: [
        {
          approval : 'Single Approval',
        },
        {
          approval : 'Double Approval',
        },
        {
          approval : 'Tripple Approval',
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

<style src="./ApprovalReassignment.scss" lang="scss"/>