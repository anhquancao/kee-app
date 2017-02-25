export default {
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validatePassword(p) {
        if (p && p.length < 8) {
            // errors.push("Your password must be at least 8 characters");
            return false;
        }
        if (p && p.search(/[a-z]/i) < 0) {
            // errors.push("Your password must contain at least one letter.");
            return false;
        }
        if (p && p.search(/[0-9]/) < 0) {
            // errors.push("Your password must contain at least one digit.");
            return false;
        }
        return true;
    }

}
