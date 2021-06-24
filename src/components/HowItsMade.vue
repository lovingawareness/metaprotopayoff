<template>
    <v-row><v-col>
        <v-row>
            <v-col>
                <v-img
                    src="../assets/uriel-sc-11KDtiUWRq4-unsplash.jpg"
                    class="white--text align-end"
                    max-height="300"
                >
                    <div class="text-h1">How Proto Payoff Is Made</div>
                    <!-- Photo by <a href="https://unsplash.com/@urielsc26?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Uriel SC</a> on <a href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="text-h2">The Technology Stacks</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-card
                    elevation="3"
                >
                    <v-img></v-img>
                    <v-card-title>Web/App Server & DB</v-card-title>
                    <v-card-text>
                        <ul>
                            <li>A <a href="https://aws.amazon.com/ec2/instance-types/t2/">t2.micro</a> server instance in <a href="https://aws.northwestern.edu/">Amazon Web Services</a> (the lowest power and cost virtual server available in AWS)</li>
                            <li><a href="https://aws.amazon.com/marketplace/pp/prodview-iftkyuwv2sjxi?qid=1591613411512&sr=0-2&ref_=srh_res_product_title">Ubuntu Server 20.04 LTS</a> for the server OS</li>
                            <li><a href="https://www.nginx.com/">nginx</a> as a static web server for the client app and reverse proxy to the server app/API running on Node</li>
                            <li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/">MongoDB Community Edition</a> as the database server</li>
                            <li><a href="https://certbot.eff.org/">Certbot</a> for free self-renewing SSL certificates for both DNS names</li>
                            <li>DNS configured in Northwestern Infoblox</li>
                        </ul>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                        <a href="https://github.com/nukellogg/proto-payoff-client/blob/main/server-setup/deploy.md">Setup notes</a> can be found in the private* Github repository for the client app.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card
                    elevation="3"
                >
                    <v-img></v-img>
                    <v-card-title>
                        API/Server App: proto-payoff-server
                    </v-card-title>
                    <v-card-subtitle>api.payoff.sim.kellogg.northwestern.edu</v-card-subtitle>
                    <v-card-text>
                        <ul>
                            <li><a href="https://nodejs.dev/">Node.js</a> application server</li>
                            <li><a href="http://expressjs.com/">Express</a> web application framework for Node</li>
                            <li><a href="https://mongoosejs.com/">Mongoose</a> JavaScript library for working with MongoDB</li>
                            <li><a href="https://momentjs.com/">Moment</a> JavaScript library for working with dates and times</li>
                            <li><a href="https://socket.io/">Socket.IO</a> JavaScript library for realtime communication via the standardized <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket API</a> using Node.js</li>
                        </ul>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                        <a href="https://github.com/nukellogg/proto-payoff-server">Server code</a> can be found on Github in a private* repository in the <a href="https://github.com/nukellogg">nukellogg organization</a>.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card
                    elevation="3"
                >
                    <v-card-title>
                        Client App: proto-payoff-client
                    </v-card-title>
                    <v-card-subtitle>
                        payoff.sim.kellogg.northwestern.edu
                    </v-card-subtitle>
                    <v-card-text>
                        <ul>
                            <li><a href="https://vuejs.org/">Vue.js</a> client-side <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Single Page Application</a> framework (similar to <a href="https://reactjs.org/">React</a> and <a href="https://angularjs.org/">AngularJS</a>)</li>
                            <li><a href="https://vuex.vuejs.org/">Vuex</a> state management library for complex Vue.js applications</li>
                            <li><a href="https://router.vuejs.org/">VueRouter</a> route/URL handler library for Vue.js</li>
                            <li><a href="https://vuetifyjs.com/en/">Vuetify</a> UI framework for Vue.js using Google's <a href="https://material.io/design">Material Design</a> guidelines and iconography</li>
                            <li><a href="https://www.npmjs.com/package/vue-socket.io-extended">vue-socket.io-extended</a> library for using socket.io more easily within Vue/Vuex</li>
                            <li><a href="https://www.chartjs.org/">Chart.js</a> JavaScript library for charting that looks great without much configuration</li>
                            <li><a href="https://www.papaparse.com/">Papaparse</a> JavaScript library for processing CSVs (comma-separated value tabular data files)</li>
                        </ul>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text>
                        <a href="https://github.com/nukellogg/proto-payoff-client">Client code</a> can be found on Github in a private* repository in the <a href="https://github.com/nukellogg">nukellogg organization</a>.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>* Nick or Tim can give you access to the private Github repositories if you're interested, you just need a <a href="https://github.com/join">Github account</a> to start. We're happy to share!</p>
            </v-col>
        </v-row>
    </v-col></v-row>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
    name: "HowItsMade",
})
</script>
