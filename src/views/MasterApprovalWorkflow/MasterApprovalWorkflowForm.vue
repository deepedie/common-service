<template>
    <v-container fluid class="white px-8 pt-8">
        <v-row style="border-bottom: 2px inset #efefef">
            <p>
                <v-icon class="blue--text mb-1 ml-3">mdi-home</v-icon>
                <v-icon>mdi-circle-small</v-icon>
                <span class="blue--text" style="cursor:pointer" @click="back">Approval Workflow</span> 
                <v-icon >mdi-circle-small</v-icon>
                <span class="textColor--text">Edit</span>
            </p>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field placeholder=" " v-model="asd" dense hide-details outlined label="Approval Workflow"></v-text-field>
            </v-col>
            <v-col>
                <v-text-field placeholder=" " dense hide-details outlined label="Comment"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :header-props="{ sortIcon: null }"
                >
                    <template v-slot:item="data">
                    <tr>
                        <td>{{ data.item.no}}</td>
                        <td>
                            <v-select dense outlined hide-details class="mb-0" label=""></v-select>
                        </td>
                        <td>
                            <v-select dense outlined hide-details class="mb-0" label=""></v-select>
                        </td>
                        <td align="center">
                            <v-btn icon class="blue--text">
                                <v-icon small>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-col>
            <v-row>
                <v-btn depressed color="btnGray" class="white--text text-uppercase mr-5" to="/user-management">Cancel</v-btn>
                <v-btn depressed color="primary" class="text-uppercase">Submit</v-btn>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            asd: '',
            active: false,
            headers: [
                {
                    text: "No",
                    class: "tableHeader black--text",
                },
                {
                    text: "Approval Type",
                    class: "tableHeader black--text",
                },
                {
                    text: "Value",
                    class: "tableHeader black--text",
                },
                {
                    text: "Actions",
                    align: "center",
                    width: "150px",
                    class: "tableHeader black--text",
                },
            ],
            items: [
                {
                    no: 1,
                    approvalType: [
                        {
                            itemType: "Person"
                        },
                        {
                            itemType: "PUK"
                        },
                        {
                            itemType: "User Group"
                        },
                    ],
                    value: [
                        {
                            itemValue: "value 1"
                        },
                        {
                            itemValue: "value 2"
                        },
                        {
                            itemValue: "value 3"
                        }
                    ]
                },
                {
                    no: 2,
                    approvalType: [
                        {
                            itemType: "Person"
                        },
                        {
                            itemType: "PUK"
                        },
                        {
                            itemType: "User Group"
                        },
                    ],
                    value: [
                        {
                            itemValue: "value 1"
                        },
                        {
                            itemValue: "value 2"
                        },
                        {
                            itemValue: "value 3"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        back(){
            this.$router.push('/approval-workflow')
        }
    }
}
</script>

<style src="./MasterApprovalWorkflow.scss" lang="scss"/>
