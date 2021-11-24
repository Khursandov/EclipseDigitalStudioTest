<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-card-text>
            <div>{{ name }}</div>
            <p class="text-h5 text--primary">
                {{ charCode }}
            </p>
            <div class="text-h6 text--primary">
                1 {{ code }}
                <v-icon
                    @click="reverse = !reverse"
                    color="primary"
                >
                    mdi-arrow-left-right
                </v-icon>
                {{ currentValue }}
            </div>
        </v-card-text>

        <v-card-actions>
            <div>
                <v-icon
                    v-if="difference < 0"
                    color="error"
                >
                    mdi-arrow-bottom-left
                </v-icon>
                <v-icon
                    v-else
                    color="success"
                >
                    mdi-arrow-top-right
                </v-icon>
                {{ difference }}
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'CurrencyCard',

    props: {
        name: {
            type: String,
            default: ''
        },

        charCode: {
            type: String,
            default: ''
        },

        value: {
            type: Number,
            default: 0
        },

        previous: {
            type: Number,
            default: 0
        }
    },

    data () {
        return {
            reverse: true
        }
    },

    computed: {
        difference () {
            return (this.value - this.previous).toFixed(3)
        },

        code () {
            return this.reverse ? this.charCode : 'RUB'
        },

        currentValue () {
            return this.reverse ? `${this.value} RUB` : (1 / this.value).toFixed(3) + this.CharCode
        }
    }
};
</script>

