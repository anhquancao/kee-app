export default {
    auth: {
        user: {
            email: "",
            password: ""
        },
        error: "",
        message: "",
        isProcessing: false
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
