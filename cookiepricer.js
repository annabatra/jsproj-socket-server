var stock = {
    randomAroundZero: function () {
        var num = Math.random() > 0.5 ? 1 : -1;
        return num;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;

        var calculatedPrice = start * rate + variance * stock.randomAroundZero();
        return calculatedPrice.toFixed(0);
    }
};

module.exports = stock;
