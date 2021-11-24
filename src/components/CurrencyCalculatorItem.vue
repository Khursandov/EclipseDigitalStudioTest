<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-card-text>
            <div>{{ name }}</div>
            <p class="text-h5 text--primary">
                {{ CharCode }}
            </p>

            <div class="text-h6 text--primary">
                <v-row>
                    <v-col>
                        <v-autocomplete
                            v-model="valueOfSelect"
                            outlined
                            dense
                            :item-text="itemText"
                            return-object
                            :items="items"
                        ></v-autocomplete>
                    </v-col>
                    <v-col>
                        <v-text-field
                            dense
                            :value="valueOfInput"
                            :disabled="disabled"
                            @input="handleInput"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'CurrencyCalculatorItem',

    props: {
        value: {
            type: [String, Object],
        },

        disabled: {
            type: Boolean,
            default: false
        },

        items: {
            type: Array,
            default: () => []
        },

        itemText: {
            type: String,
            default: ''
        },

        valueOfInput: {
            type: [String, Number]
        }
    },

    data () {
        return {
            reverse: true
        }
    },

    computed: {
        valueOfSelect: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        },

        CharCode () {
            return this.valueOfSelect && this.valueOfSelect.CharCode ? this.valueOfSelect.CharCode : ''
        },

        name () {
            return this.valueOfSelect && this.valueOfSelect.Name ? this.valueOfSelect.Name : ''
        }
    },

    methods: {
        handleInput () {
            const value = event.target.value;
            this.$emit('input-value', value);
        }
    }
};
</script>

