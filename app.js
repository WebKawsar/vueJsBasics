new Vue({
  el: "#app",
  data: {
    name: "Kawsar",
    x: 0,
    y: 0

  },
  methods: {
    updateName(){
        this.name = "Shamim"
    },
    getCord(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
 


});
