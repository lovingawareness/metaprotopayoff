<template>
    <v-row><v-col>
        <v-row>
            <v-col>
                <v-img>
                    <div class="text-sm-h1 text-h2">About This Site</div>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>This site is built using <a href="https://vuejs.org/">Vue.js</a> and associated libraries, the same stack used for the <router-link to="/howitsmade">proto-payoff-client</router-link>.</p>
                <p>This app is published to the web for free using <a href="https://surge.sh/">surge.sh</a>, which is a CDN as well as a command-line tool (installed via Node's <a href="https://docs.npmjs.com/about-npm">npm</a> tool).</p>
                <p>Code for this site is <a href="https://github.com/lovingawareness/metaprotopayoff">publicly available</a>.</p>
                <p>Content initially drafted on <a href="https://slides.com">slides.com</a>.</p>
                <p>Made by <a href="https://github.com/lovingawareness">Nicholas Bennett</a> for <a href="https://www.kellogg.northwestern.edu/">Kellogg School of Management</a> at <a href="https://northwestern.edu">Northwestern University</a>.</p>
            </v-col>
        </v-row>
    </v-col></v-row>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
    name: "AboutThisSite",
})
</script>
 