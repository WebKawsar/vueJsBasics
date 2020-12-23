new Vue({
  el: "#app",
  data: {

    stdAge: 18,
    userAge: 19,
    name: "Imran"

  },
  methods: {

    changeUser(){
      return this.name === "Kawsar" ? "Kawsar" : "Shamim"
    }

  }
 


});
