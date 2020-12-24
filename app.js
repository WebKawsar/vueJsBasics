new Vue({
  el: "#app",
  data: {
    name: "Kawsar"

  },
  methods: {
    update(){
      setTimeout(() => {

        this.name = "Shamim"
        
      }, 3000)
    }
  }
 


});
