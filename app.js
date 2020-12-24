const app11 = new Vue({
  el: "#app1",
  data: {

    value: "First"

  },
  methods: {
    changeInstance() {
      app12.value = "Changed hoye gese"
    }
  }
 
});


const app12 = new Vue({
  el: "#app2",
  data: {

    value: "Second"

  }
 
});