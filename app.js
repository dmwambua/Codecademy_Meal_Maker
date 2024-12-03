const menu = {
    _meal: "",
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            this._meal = mealToCheck;
        } else {
            console.log(`New Meal has to be a word or a phrase`);
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            this._price = priceToCheck;
        } else {
            console.log(`Price should always be a number`);
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return (`Todays special is ${this._meal}, and the price is $${this._price}. Have fun coding while having breakfast :)`)
        } else {
            return (`Check to make sure that you entered a right meal and price`)
        }
    }
};
// Set meal and price using the setters
menu.meal = "Breakfast in bed";
menu.price = 23;
console.log(menu.todaysSpecial);
//menu._meal = 19;
// menu._price = 'good morning';
//console.log(menu);
