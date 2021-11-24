<template>
    <v-snackbar
        v-model="snackbar.display"
    >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbar.display = false"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Snacbar',

    computed: {
        ...mapState({
            snackbar: (state) => state.ui.snackbar
        })
    }
};
</script>

<style>

</style>
