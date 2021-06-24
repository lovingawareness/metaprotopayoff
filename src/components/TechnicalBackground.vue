<template>
    <v-row><v-col>
        <v-row>
            <v-col>
                <v-img
                    src="../assets/roman-mager-5mZ_M06Fc9g-unsplash.jpg"
                    class="white--text align-end"
                    max-height="300"
                >
                    <div class="text-h1">Technical Background</div>
                    <!-- Photo by <a href="https://unsplash.com/@roman_lazygeek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Mager</a> on <a href="https://unsplash.com/s/photos/equations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
                </v-img>
                
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>In the STRT-452 course, taught by various faculty but designed originally by Niko Matouschek, this simulation ("Proto Payoff") is used to illustrate some game theoretic concepts related to Coordination (<a href="https://en.wikipedia.org/wiki/Coordination_game" target="_blank">Wikipedia</a>) with respect to managing teams.</p>
                <p>It examines two ways that the value of work of a team can be evaluated:</p>
                <ol>
                    <li>The value depends on the net output, so each employee's payoff will depend on their individual work along with the average of the rest of the team</li>
                    <li>
                        <p>The value depends on the lowest performer, so each employee's payoff will be limited by the weakest performer's output (relay race, synchronized swim team, assembly lines)</p>
                        <v-row>
                            <v-col></v-col>
                            <v-col
                                cols="4"
                            >
                                <v-img
                                    src="../assets/assembly_line.png"
                                    contain
                                ></v-img>
                            </v-col>
                            <v-col
                                cols="2"
                            >
                                <v-img
                                    src="../assets/relay_race_baton_pass.jpeg"
                                    contain
                                ></v-img>
                            </v-col>
                            <v-col
                                cols="4"
                            >
                                <v-img
                                    src="../assets/synchronized_swimming.jpeg"
                                ></v-img>            
                            </v-col>
                            <v-col></v-col>
                        </v-row>
                    </li>
                </ol>
                <p>The simulation randomly and anonymously splits students into teams of 5, with one manager and four employees. Each run of the game can be one of two types, and takes place over a series of timed rounds. Half the teams are able to chat amongst themselves, and half have a variable bonus per round (set by the managers).</p>
                <p>There are introductory phases built-in to the game when the score doesn't count, but give the manager and employee students (who are not pre-assigned) a chance to get familiar with the interface and the flow of the game.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="3"
            >
                <v-img
                    src="../assets/book-freakonomics.jpeg"

                    contain
                ></v-img>
            </v-col>
            <v-col
                cols="3"
            >
                <v-img
                    src="../assets/book-when.jpeg"

                    contain
                ></v-img>
            </v-col>
            <v-col
                cols="3"
            >
                <v-img
                    src="../assets/book-thinking_fast_and_slow.jpeg"

                    contain
                ></v-img>
            </v-col>
            <v-col
                cols="3"
            >
                <v-img
                    src="../assets/book-defying_logic_at_work_and_at_home.jpeg"

                    contain
                ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>🎰 In the original in-class version of the game, some faculty would hold a raffle for copies of popular behavioral economics books (e.g. Freakonomics) to motivate students to earnestly play the game.</p>
            </v-col>
        </v-row>
    </v-col></v-row>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
    name: "TechnicalBackground",
})
</script>
