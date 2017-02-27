export default {
    auth: {
        user: {
            email: "",
            password: ""
        },
        token: "",
        isLoggedIn: false,
        error: "",
        isProcessing: false,
        registerError: ""
    },

    fuelSavings: {
        newMpg: '',
        tradeMpg: '',
        newPpg: '',
        tradePpg: '',
        milesDriven: '',
        milesDrivenTimeframe: 'week',
        displayResults: false,
        dateModified: null,
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
            monthly: 0,
            annual: 0,
            threeYear: 0
        }
    }
};
