<template>
    <v-container fluid class="white px-8 pt-8">
        <v-row style="border-bottom: 2px inset #efefef">
            <p>
                <v-icon class="blue--text mb-1 ml-3">mdi-home</v-icon>
                <v-icon>mdi-circle-small</v-icon>
                <span class="blue--text" style="cursor:pointer" @click="back">User Management</span> 
                <v-icon >mdi-circle-small</v-icon>
                <span class="textColor--text">Edit</span>
            </p>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field placeholder=" " v-model="asd" dense hide-details outlined label="User ID"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Nama Perusahaan"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Area" append-icon="mdi-magnify"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Zona/Cabang" append-icon="mdi-magnify"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Email Address"></v-text-field>
                <v-col cols="12">
                    <v-row>
                        <v-text-field class="mr-4" placeholder=" " dense hide-details outlined label="IMEI 1"></v-text-field>
                        <v-btn depressed class="white--text" color="blue">Reset</v-btn>
                    </v-row>
                </v-col>
            </v-col>
            <v-col>
                <v-text-field placeholder=" " dense hide-details outlined label="Job" append-icon="mdi-magnify"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Cluster" append-icon="mdi-magnify"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Username"></v-text-field>
                <v-text-field placeholder=" " dense hide-details outlined label="Phone Number"></v-text-field>
                <v-checkbox dense class="mb-5" v-model="active" :label="active ? 'Active' : 'Inactive'"></v-checkbox>
                <v-col cols="12">
                    <v-row>
                        <v-text-field class="mr-4" placeholder=" " dense hide-details outlined label="IMEI 2"></v-text-field>
                        <v-btn depressed class="white--text" color="blue">Reset</v-btn>
                    </v-row>
                </v-col>
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
        }
    },
    methods: {
        back(){
            this.$router.push('/user-management')
        }
    }
}
</script>

<style src="./UserManagementForm.scss" lang="scss"/>
