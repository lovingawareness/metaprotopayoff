<template>
    <v-row><v-col>
        <v-row>
            <v-col>
                <v-img
                    src="../assets/clay-banks-NGupON6JOYE-unsplash.jpg"
                    class="white--text align-end"
                    max-height="300"
                >
                    <div class="text-sm-h1 text-h2">Learning Resources</div>
                    <!-- Photo by <a href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clay Banks</a> on <a href="https://unsplash.com/s/photos/learn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
                </v-img>
                
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="text-h2">Best Tutorials</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="12" md="6"
            >
                <v-card
                    elevation="3"
                >
                    <v-img
                        src="../assets/treasure_porth_screenshot.png"
                        class="black--text align-end"
                    ></v-img>
                    <v-divider></v-divider>
                    <v-card-subtitle>
                        <a href="https://teamtreehouse.com/treasureporth">Treasure Porth's classes at Team Treehouse</a> (some tutorials are free; general access at $25/month)
                    </v-card-subtitle>
                    <v-card-text>
                        <p>
                            It's honestly really frustrating to learn JavaScript programming! I was constantly beset by confusion and things not working. But that's actually the norm and accepting that it's going to be frustrating made it easier for me to keep going and not give up due to Impostor Syndrome.
                        </p>
                        <p>
                            Finding quality instructors who felt like they were approachable and did overuse gatekeeping language (e.g. "easy", "simple" when it doesn't feel easy or simple as a beginner) was instrumental for me. Treasure Porth really helped me so much with getting started and like I could do this.
                        </p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-img
                        src="../assets/treasure_porth_courses.png"
                    ></v-img>
                </v-card>
            </v-col>
            <v-col
                cols="12" md="6"
            >
                <v-card
                    elevation="3"
                >
                    <v-img
                        src="../assets/maximillian_schwarzmuller_udemy.png"
                    ></v-img>
                    <v-divider></v-divider>
                    <v-card-subtitle>
                        <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">Vue.js 2: The Complete Guide</a> - Frequently on sale at Udemy for around $9.99. Taught by <a href="http://www.udemy.com/user/maximilian-schwarzmuller/">Maximillian Schwarzmüller</a>.
                    </v-card-subtitle>
                    <v-card-text>
                        <p>
                            It felt like a big gap between what I learned from Treasure Porth's introductory classes to the next level of making a working app of my own idea, and I spent a lot of time with topical tutorials on the web. I was looking for help with breaking down my idea into pieces of an app. Eventually my frustration with those lead me to this exceptional and professional educator.
                        </p>
                        <p>
                            This is the course I took, which I've followed linearly for parts and skipped around to try things out in actual practice apps. Source code is available on Github for all the projects built in the course.
                        </p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-img
                        src="../assets/vue_js_complete_guide.png"
                    ></v-img>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="text-h2">Here are all of my bookmarks collected during the creation of this app:</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-treeview :items="bookmarks"></v-treeview>
            </v-col>
        </v-row>
    </v-col></v-row>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
    name: "LearningResources",
})
</script>
