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
          <div>
            {{ response }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
     export default {
       data() {
         return {
          
      response: null,
           softwareName: '',
           programmingLanguage: '',
           linesOfCode: null,
           deploymentEnvironment: '',
           numUsers: null
         }
       },
       methods: {
         calculateCarbonFootprint() {
           const payload = {
             software_name: this.softwareName,
             programming_language: this.programmingLanguage,
             lines_of_code: this.linesOfCode,
             deployment_environment: this.deploymentEnvironment,
             num_users: this.numUsers
           }

           // Make an API call to the Flask backend
           fetch('/calculate-carbon-footprint', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(payload)
           })
           .then(response => response.json())
           .then(data => {
            this.response = data;
             // Handle the response from the Flask backend
             // Update the UI or display the result as needed
             console.log(data)
           })
           .catch(error => {
             console.error(error)
           })
         }
       }
     }
     </script>