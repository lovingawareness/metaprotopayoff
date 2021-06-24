<template>
  <v-app>
    <TheNav />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue"
import TheNav from "@/components/TheNav"

export default Vue.extend({
  name: "Home",
  components: {
    TheNav
  },
  created() {
    document.title = "Meta - Kellogg Proto Payoff Simulation"
  },
})
</script>
