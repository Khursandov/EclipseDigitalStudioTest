<template>
    <v-row>
        <v-col>
            <currency-calculator-item
                v-model="firstCurrency"
                @input-value="calcuateCurrency"
                :items="items"
                item-text="CharCode"
            />
        </v-col>

        <v-col cols="1" class="my-auto text-center">
            <v-icon
                @click="reverse"
                color="primary"
            >
                mdi-arrow-left-right
            </v-icon>
        </v-col>

        <v-col>
            <currency-calculator-item
                :disabled="true"
                v-model="secondCurrency"
                :items="items"
                :value-of-input="valueOfInput"
                item-text="CharCode"
            />
        </v-col>
    </v-row>
</template>

<script>
import CurrencyCalculatorItem from '@/components/CurrencyCalculatorItem'

export default {
    name: 'CurrencyCalculator',

    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    components: {
        CurrencyCalculatorItem
    },

    data () {
        return {
            firstCurrency: '',
            secondCurrency: '',
            firstCurrencyInputValue: 0
        }
    },

    computed: {
        difference () {
            return (this.value - this.previous).toFixed(3)
        },

        code () {
            return this.reverse ? this.CharCode : 'RUB'
        },

        currentValue () {
            return this.reverse ? `${this.value} RUB` : (1 / this.value).toFixed(3) + this.CharCode
        },

        valueOfInput () {
            let total = 0
            if (this.checkNumber(this.secondCurrency.Value))
                total = this.checkNumber(this.firstCurrency.Value) * this.checkNumber(this.firstCurrencyInputValue) / this.checkNumber(this.secondCurrency.Value)
            return total.toFixed(3)
        }
    },

    methods: {
        reverse () {
            [this.firstCurrency, this.secondCurrency] = [this.secondCurrency, this.firstCurrency]
        },

        calcuateCurrency ($event) {
            if (this.checkNumber($event))
                this.firstCurrencyInputValue = this.checkNumber($event)
        },

        checkNumber (val) {
            return parseFloat(val) ? parseFloat(val).toFixed(3) : 0
        }
    }
};
</script>

