<template>
  <v-container fluid class="white px-8 pt-8">
    <h6 class="font-weight-bold">Initiate Request</h6>
    <v-row justify="start" no-gutters>
        <v-col md="2">
            <v-subheader class="">Request Type</v-subheader>
        </v-col>
        <v-col md="4">
            <v-text-field 
                dense
                outlined
                hide-details
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="start" no-gutters>
        <v-col md="2">
            <v-subheader class="">Subject*</v-subheader>
        </v-col>
        <v-col md="6">
            <v-text-field 
                dense
                outlined
                hide-details
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row align="start" justify="start" no-gutters>
        <v-col md="2">
            <v-subheader class="">Description</v-subheader>
        </v-col>
        <v-col md="6">
            <v-textarea outlined hide-details="auto" dense></v-textarea>
        </v-col>
    </v-row>
    <v-row align="center" justify="start" no-gutters>
        <v-col md="2">
            <v-subheader class="">Attachment</v-subheader>
        </v-col>
        <v-col md="4">
            <v-btn plain icon >
                <v-icon>mdi-paperclip</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" class="mt-4" justify="center" no-gutters>
        <v-col>
            <p class="font-weight-bold pl-4">List Item</p>
        </v-col>
        <v-col class="text-right">
            <v-dialog
                v-model="dialogAdd"
                max-width="800"
                scrollable
            >
                <template v-slot:activator="{ on, attrs}">
                    <v-btn 
                        outlined
                        small
                        v-on="on"
                        v-bind="attrs"
                    >Add</v-btn>
                </template>
                <v-card>
                    <v-card-title style="height:50px;" class="text-center header yellow">
                        <span class="font-weight-bold">Add Item</span>
                        <!-- <v-spacer></v-spacer> -->
                        <!-- <v-icon @click="dialogAdd = false">mdi-close</v-icon> -->
                    </v-card-title>
                    <v-card-text>
                        <v-container  fluid>
                            <v-row align="center" justify="start" no-gutters>
                                <v-col md="3" class="pl-3">
                                    <h6 class="font-weight-bold">Type Request</h6>
                                </v-col>
                                <v-col md="4" class="text-center pa-0">
                                    <h6 class="font-weight-bold">Alamat</h6>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col class="mb-0" md="3">
                                    <v-subheader>Provinsi</v-subheader>
                                </v-col>
                                <v-col class="mb-0" cols="4">
                                    <v-autocomplete outlined dense hide-details="auto"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col class="offset-md-3">
                                    <v-text-field
                                        dense
                                        hide-details
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn class="ml-4" outlined>Add</v-btn>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col md="3">
                                    <v-subheader>Kabupaten/Kota</v-subheader>
                                </v-col>
                                <v-col cols="4">
                                    <v-autocomplete outlined dense hide-details="auto"></v-autocomplete>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col class="offset-md-3">
                                    <v-text-field
                                        dense
                                        hide-details
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn class="ml-4" outlined>Add</v-btn>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col md="3">
                                    <v-subheader>Kecamatan</v-subheader>
                                </v-col>
                                <v-col cols="4">
                                    <v-autocomplete outlined dense hide-details="auto"></v-autocomplete>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col class="offset-md-3">
                                    <v-text-field
                                        dense
                                        hide-details
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn class="ml-4" outlined>Add</v-btn>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col md="3">
                                    <v-subheader>Kelurahan</v-subheader>
                                </v-col>
                                <v-col cols="4">
                                    <v-autocomplete outlined dense hide-details="auto"></v-autocomplete>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col class="offset-md-3">
                                    <v-text-field
                                        dense
                                        hide-details
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn class="ml-4" outlined>Add</v-btn>
                                </v-col>
                            </v-row>
                             <v-row no-gutters>
                                <v-col md="3">
                                    <v-subheader>Kodepos</v-subheader>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        dense
                                        hide-details="auto"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-col class="text-right">
                        <v-btn
                            block
                            color="btnGray"
                            class="white--text"
                            @click="dialogAdd = false"
                        >
                            Cancel
                        </v-btn>
                        </v-col>
                        <!-- <v-spacer></v-spacer> -->
                        <v-col>
                        <v-btn
                            block
                            color="primary"
                            @click="dialogAdd = false"
                        >
                            Save
                        </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="pl-6 pt-0 pb-0">
            <v-data-table
                :headers="headers"
                :items="items"
                :header-props="{ sortIcon: null }"
            >
            <template v-slot:item="data">
                <tr>
                    <td>{{ data.item.provinsi }}</td>
                    <td>{{ data.item.kabupaten }}</td>
                    <td>{{ data.item.kecamatan }}</td>
                    <td>{{ data.item.kelurahan }}</td>
                    <td>{{ data.item.kodepos }}</td>
                    <td>
                        <v-btn 
                            icon
                        >
                            <v-icon
                                class="blue--text" 
                                small
                            >
                            mdi-pencil
                            </v-icon> 
                        </v-btn>
                    </td>
                </tr>
            </template>
            </v-data-table>
        </v-col>
    </v-row>
    <v-row>
        <v-col class="pl-7">
            <v-btn small outlined>Submit</v-btn>
            <v-btn small class="ml-4" outlined>Save Draft</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return {
            dialogAdd: false,
            headers: [
                {
                    text: "Provinsi",
                    align: "start",
                    value: "name",
                    class: "blue black--text",
                },
                {
                    text: "Kabupaten/Kota",
                    align: "start",
                    value: "name",
                    class: "blue black--text",
                },
                {
                    text: "Kecamatan",
                    align: "start",
                    // width: "250px",
                    class: "blue black--text",
                },
                 {
                    text: "Kelurahan",
                    align: "start",
                    // width: "250px",
                    class: "blue black--text",
                },
                 {
                    text: "Kodepos",
                    align: "start",
                    // width: "250px",
                    class: "blue black--text",
                },
                {
                    text: "Action",
                    align: "center",
                    class: "blue black--text"
                }
            ],
            items: [
                {
                    provinsi: "DKI Jakarta",
                    kabupaten: "Jakarta Barat",
                    kecamatan: "Kelapa Gading",
                    kelurahan: "Sunter",
                    kodepos: "123156"
                },
                {
                    provinsi: "DKI Jakarta",
                    kabupaten: "Jakarta Barat",
                    kecamatan: "Joglo",
                    kelurahan: "Ujung Menteng",
                    kodepos: "123432"
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>