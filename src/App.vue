<template>
  <v-app>
        <TheNav />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNav from "@/components/TheNav"

export default {
  name: "App",
  components: {
    TheNav
  },
  created() {
    document.title = "Meta - Kellogg Proto Payoff Simulation"
  },
}
</script>
