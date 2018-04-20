<template>
    <div>
        <div>
            and material for the best price through our contacts with factories and manufacturers. Our sales services include after sales training and maintenance as well as spare parts.
        </div>
        <div>
           <!-- <img src="/prod-images/newprod1.png" /> -->
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Outdoor",
  data() {
    return {
      msg: "Outdoor"
    };
  },
  methods: {},
  created: function() {
    axios.get("/outdoor").then(function(res) {
      console.log(res);
    });
  },
  watch: {}
};
</script>


<style lang="css">

</style>



