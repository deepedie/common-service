<template>
  <v-container fluid class="white px-8 pt-8">
      <v-row justify="space-between" class="mb-1">
          <div>
            <h1 class="btn-1">Parameter Request List</h1>
          </div> 
          <div>
             <v-btn outlined elevation="0" >To do list</v-btn>
             <v-btn outlined elevation="0" class="mr-4 ml-4">Monitor</v-btn>
             <v-btn outlined elevation="0" >Track your request</v-btn>
          </div>
      </v-row>
      <v-divider class="mb-10"></v-divider>
      <v-row justify="space-between">
            <v-col class="pb-0" cols="3">
                <v-select hide-details="auto" outlined dense placeholder="Request ID"></v-select>
            </v-col>
            <v-col class="pb-0" cols="3">
                <v-text-field hide-details="auto" outlined dense placeholder="Search" append-icon="mdi-magnify"></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pb-0" cols="5">
                <v-btn class="btn-1" elevation="0" rounded> <v-icon medium class="blue--text mr-1">mdi-refresh</v-icon> Refresh</v-btn>
                <v-btn elevation="0" outlined class="mr-4 ml-4" rounded>Claim</v-btn>
                <v-btn elevation="0" outlined rounded>Transfer Request</v-btn>
            </v-col>
      </v-row>
      <v-row>
          <v-col class="pt-0">
            <v-data-table
                v-model="selected"
                show-select
                :headers="headers"
                :items="items"
                item-key="id"
                :header-props="{ sortIcon: null }"
            >
                <!-- <template v-slot:top>
                    <v-switch
                        v-model="singleSelect"
                        class="pa-3"
                    ></v-switch>
                </template>
                <template v-slot:item="data">
                    <tr>
                        <td>{{ data.item.id}}</td>
                        <td>{{ data.item.username}}</td>
                        <td>{{ data.item.job}}</td>
                        <td>{{ data.item.area}}</td>
                        <td>{{ data.item.cluster}}</td>
                        <td>{{ data.item.cabang}}</td>
                        <td>{{ data.item.cabang}}</td>
                        <td>{{ data.item.cabang}}</td>
                    </tr>
                </template>  -->
            </v-data-table>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return {
            selected: [],
            headers: [
                {
                text: "Request ID",
                align: "start",
                value: "id",
                width: "150px",
                class: "tableHeader white--text",
                },
                {
                text: "Request Type",
                // width: "150px",
                class: "tableHeader white--text",
                value: "username",
                },
                {
                text: "Request Subject",
                // width: "150px",
                class: "tableHeader white--text",
                value: "job",
                },
                {
                text: "Creator",
                // width: "150px",
                class: "tableHeader white--text",
                value:"cabang"
                },
                {
                text: "Created Date",
                // width: "150px",
                class: "tableHeader white--text",
                value: "date"
                },
                {
                text: "Modified Date",
                // width: "150px",
                class: "tableHeader white--text",
                value: "date"
                },
                {
                text: "Overdue",
                // width: "150px",
                class: "tableHeader white--text",
                value: "area"
                },
                {
                text: "Status",
                //   align: "center",
                // width: "250px",
                class: "tableHeader white--text",
                value: "cabang"
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
                date: "12-Des-2020"
                },
                {
                id : '1h242h12sdf2f',
                username: 'author198',
                job: 'secret01',
                area: '22 whale Street',
                cluster: '-',
                cabang: 'Cidory',
                date: "12-Des-2020"
                }
            ]
        }
    }
}
</script>

<style src="./RequestList.scss" lang="scss" scoped/>