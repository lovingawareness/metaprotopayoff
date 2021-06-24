<template>
    <v-container>
        <v-row>
            <v-col>
                <TechnicalBackground />
                <HowItsMade />
                <LearningResources />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Vue from "vue"
import TechnicalBackground from "./TechnicalBackground.vue"
import HowItsMade from "./HowItsMade.vue"
import LearningResources from "./LearningResources.vue"

export default Vue.extend({
    name: "HomeLinks",
    components: {
        TechnicalBackground, HowItsMade, LearningResources
    }
})
</script>