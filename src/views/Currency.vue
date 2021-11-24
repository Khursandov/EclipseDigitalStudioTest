<template>
  <v-container>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-row justify="space-between" class="my-3 mx-2">
          <v-col cols="12">
            <v-text-field
              v-model="search"
              outlined
              dense
              placeholder="Search..."
            ></v-text-field>
          </v-col>

          <v-col cols="4" v-for="currency in currencies" :key="currency.id" >
            <currency-card
              :name="currency.Name"
              :char-code="currency.CharCode"
              :value="currency.Value"
              :previous="currency.Previous"
            />
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab-item>
        <currency-calculator
          class="my-3 mx-2"
          :items="currencies"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import CurrencyCard from '@/components/CurrencyCard'
import CurrencyCalculator from '@/components/CurrencyCalculator'

import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Currency',

    data () {
      return {
        tab: null,
        search: '',
        items: [
          'List', 'Online calculator',
        ],
      }
    },

    components: {
      CurrencyCard,
      CurrencyCalculator
    },

    computed: {
      ...mapState({
        currencyList: (state) => state.currencies.currencyList
      }),

      currencies () {
        return this.currencyList
          .filter(item => (item.Name.toLowerCase().indexOf(this.search) > -1 || item.CharCode.toLowerCase().indexOf(this.search) > -1))
      }
    },

    created () {
      this.getCurrencies()
    },

    methods: {
      ...mapActions(['getCurrencies'])
    }
  }
</script>
