<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pa-4">
          <v-form @submit.prevent="calculateCarbonFootprint">
            <v-text-field outlined dense v-model="softwareName" label="Software Name"></v-text-field>
            <v-text-field outlined dense v-model="programmingLanguage" label="Programming Language"></v-text-field>
            <v-text-field outlined dense v-model="linesOfCode" label="Lines of Code" type="number"></v-text-field>
            <v-text-field outlined dense v-model="deploymentEnvironment" label="Deployment Environment"></v-text-field>
            <v-text-field outlined dense v-model="numUsers" label="Number of Users" type="number"></v-text-field>
            <v-btn type="submit" color="primary">Calculate</v-btn>
          </v-form>
        </v-col>
        <v-col cols="6" class="pa-0 grey lighten-1 black--text">
          <h3 class="ma-4">
            Here is the response of your Given Information:
          </h3>
          <div class="pa-4">
            <div>
              Carbon FootPrint : {{ corbonfootPrint }}

            </div>
            <div>
              insights : {{ insight1 }}

              <br>
              insights : {{  insight2 }}

            </div>
            <!-- Carbon FootPrint : {{ corbonfootPrint }} -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      corbonfootPrint: null,
      insight1: null,
      insight2: null,
      response: null,
      softwareName: null,
      programmingLanguage: null,
      linesOfCode: null,
      deploymentEnvironment: null,
      numUsers: null
    }
  },
  methods: {
    async calculateCarbonFootprint() {
      axios
        .post('http://127.0.0.1:5000/calculate-carbon-footprint', {
          software_name: this.softwareName,
          programming_language: this.programmingLanguage,
          lines_of_code: this.linesOfCode,
          deployment_environment: this.deploymentEnvironment,
          num_users: this.numUsers
        })
        .then(res => {
          this.response = res.data;
          this.corbonfootPrint = res.data.carbon_footprint;
          this.insight1 = res.data.insights[0];
          this.insight2 = res.data.insights[1];
          console.log(res.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>