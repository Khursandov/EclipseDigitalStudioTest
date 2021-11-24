import { CurrencyApi } from '@/api/Currency'

export const state = {
    currencyList: []
};

export const getters = {
};

export const mutations = {
    SET_CURRENCIES (state, payload) {
        if (!payload.Valute) return
        state.currencyList = Object.entries(payload.Valute).map(item => item[1])
    }
};

export const actions = {
    async getCurrencies ({ commit }) {
        try {
          commit('SET_CURRENCIES', await CurrencyApi.get())
        } catch (err) {
          commit('SET_SNACBAR_TEXT', err);
        }
    }
};

