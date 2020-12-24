new Vue({
  el: "#app",
  data: {
    name: "Kawsar"
  },
  methods: {
    updateName() {
      this.name = "Ahmed"
    },
    destroy() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log("Before created")
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before mounted")
  },
  mounted() {
    console.log("Mounted")
  },
  beforeUpdate() {
    console.log("Before update")
  },
  updated() {
    console.log("Updated")
  },
  beforeDestroy() {
    console.log("Before destroy")
  },
  destroyed() {
    console.log("Destroyed")
  },

})