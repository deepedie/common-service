<template>
  <v-navigation-drawer app class="secondary" v-model="DRAWER_STATE" width="300">
    <v-app-bar class="primary" fixed flat>
      <v-toolbar-title class="ml-3">{{ this.$store.state.titleApp }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon right @click="TOGGLE_DRAWER">mdi-backburger</v-icon>
    </v-app-bar>
    <v-card flat elevation="0" color="secondary lighten-1 mt-10">
      <v-list-item class="px-8 pt-7">
        <v-list-item-avatar >
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title class="white--text mb-2">Mr.White</v-list-item-title>
          <v-list-item-subtitle class="white--text">Administrator</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-col class="text-right">
          <v-btn x-small plain text class="text-capitalize white--text">
            <v-icon x-small left>mdi-pencil</v-icon>
            Change Password
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>




    <v-list dense>
      <template v-for="(item) in items">
        <v-list-group
          color="primary"
          v-if="
            item.subMenus &&
              DRAWER_STATE 
          "
          :key="item.title"
          v-model="item.model"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-hover>
                <v-list-item-title class="white--text">
                  {{ item.title }}
                </v-list-item-title>
              </v-hover>
            </v-list-item-content>
          </template>
          <template v-for="(child, i) in item.subMenus">
            <v-list-item
              v-if="typeof child.hasAccess == 'undefined' || child.hasAccess"
              :key="i"
              :to="child.link === '#' ? null : child.link"
              link
            >
              <v-list-item-content>
                <v-list-item-title class="gray--text" link>
                  {{ child.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>

        <v-list-item
          color="primary"
          v-else-if="typeof item.hasAccess == 'undefined' || item.hasAccess"
          :key="item.text"
          :to="item.link === '#' ? null : item.link"
          link
        >
          <v-list-item-content>
            <v-hover v-slot="{ hover }">
            <v-list-item-title class="white--text" :class="hover ? 'white--text' : 'gray--text'" link>
              {{ item.title }}
            </v-list-item-title>
            </v-hover>
          </v-list-item-content>
        </v-list-item>
      </template>


      <!-- <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :append-icon="item.subMenus !== '' ? '' : ''"
        no-action
        :to="item.link"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.subMenus"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group> -->


      <!-- <v-list-item
        color="primary"
        :key="item.text"
        :to="item.link === '#' ? null : item.link"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="grey--text" link>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->


      <!-- <template v-for="(item) in items">
        <v-list-group :append-icon="item.subMenus !== '' ? 'mdi-chevron' : ''" v-if="!item.subMenus" :key="item.title">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="(child, i) in item.subMenus">
            <v-list-item
              :key="i"
              :to="child.link === '#' ? null : child.link"
            >
                    {{ child.title }}
            </v-list-item>
          </template>
        </v-list-group> 
      </template>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    source: String,
  },
  data() {
    return {
      items: [
        { title: "Home", link: "/" },
        {
          title: "User Management",
          link: "/feature-access",
        },
        { title: "Group Master",
          subMenus: [ 
          {
            title: "Group Master",
            link: '/group-master'
          },
          {
            title: "User Matrik",
            link: '/user-matrik'
          }
          ]
        },
        {
          title: "Master Approval Workflow",
          link: "/seller-reportas",
        },
        {
          title: "Approval Reassignment",
          link: "/seller-report",
        },
        {
          title: "Paramenter",
          link: "/asds",
        },
        {
          title: "Product Catalogue",
          link: "/asdd",
        },
        {
          title: "Credit Simulation",
          link: "/asde",
        },
        {
          title: "Pengaturan",
          link: "/asdw",
        },
        {
          title: "Report",
          link: "/asdq",
        },
      ],
      sidebarWidth: 280,
      sidebarMinWidth: 0, //96,
    };
  },
  mounted(){
    console.log("menunya", this.items)
  },
  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      },
      set(newValue) {
        if (newValue === this.drawer) return;
        this.TOGGLE_DRAWER();
      },
    },
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
  },
};
</script>
<style src="./Sidebar.scss" lang="scss" />


