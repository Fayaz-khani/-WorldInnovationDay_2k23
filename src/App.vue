<template>
  <v-app>

    <!-- Top Header -->
    <v-app-bar app elevation="0" height="120" color="#130834" dark >
          <div class="d-flex align-center">
            <div class="">
              <h1>
                Green Devs
              </h1>
              
              <!-- <img src="assets/images/Logo.png" width="200" alt="">
             -->
            </div>
            <!-- <span class="mx-7">Learn how to build, maintain and run greener applications</span> -->
          </div>
          <v-spacer></v-spacer>

          <v-btn depressed to="/FootPrint" raised  color="#33C2EA"   class="mx-3 black--text ">
            Calculate
          </v-btn> 
          <v-btn to="/" depressed raised  color="#33C2EA"   class=" black--text ">
            Home
          </v-btn>
          <v-btn depressed raised  color="#33C2EA" dark class="black--text mx-4">
            LOG IN
          </v-btn>
          <v-btn depressed  color="#33C2EA" dark class="black--text">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn depressed text class="display-4  white--text">
            <v-icon x-large class="pa-0 ma-0"> mdi-menu</v-icon>
          </v-btn>
          
        </v-app-bar>
    <v-main>
      <router-view></router-view>
      <!-- <MianComp /> -->
      <!-- <FootPrint /> -->
      <!-- <PageNotFound /> -->
    </v-main>


    <template>
  <v-footer
  height="30"
    class="blue darken-3"
  >
    <v-container
      class="fill-height"
      fluid
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex text-center>
          <span class="small font-italic white--text">&copy; 2023 Green Software Development. All rights reserved.</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

  </v-app>
</template>

<script>
// import PageNotFound from './components/PageNotFound';
// import MianComp from './components/Navigation/MianComp.vue';
// import FootPrint from './components/Navigation/FootPrint.vue';

export default {
  name: 'App',

  components: {
    // MianComp,
    // FootPrint,
    // PageNotFound,
  },

  data: () => ({
    items: [
      { title: 'Out Team' },
      { title: 'Gallery' },
      { title: 'Products' },
      { title: 'Join Us' },
    ],
  }),
};
</script>



<style scoped>
@import url("assets/Style/style.css");
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap');
/* .MyMenuBtn:hover {
  background-color: transparent !important;
  border: 1px solid red !important;
} */
</style>
