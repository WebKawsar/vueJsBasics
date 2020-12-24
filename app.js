new Vue({
  el: "#app",
  data: {
    name: "Kawsar",
    // x: 0,
    // y: 0

  },
  methods: {
    // updateName(){
    //     this.name = "Shamim"
    // },
    // getCord(event) {
    //   this.x = event.clientX;
    //   this.y = event.clientY;
    // }

    updateName(name, event) {
      this.name = name;
      console.log(event);
    },
    handleForm(e) {
      
      
      console.log('Submit form');
    }
  }
 
});
