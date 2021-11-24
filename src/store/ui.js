export const state = {
    snackbar: {
        display: false,
        text: ''
    },
};

export const getters = {
};

export const mutations = {
    SET_SNACBAR_TEXT (state, text) {
        state.snackbar.text = text;
        state.snackbar.display = true;
    }
};

export const actions = {
};
