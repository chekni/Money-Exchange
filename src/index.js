module.exports = function makeExchange(currency) {

     if (currency <= 0)
          return {};

     if (currency >= 10000)
          return { error: "You are rich, my friend! We don't have so much coins for exchange" };

     let changeMoney = {};
     changeMoney.H = 0;
     changeMoney.Q = 0;
     changeMoney.D = 0;
     changeMoney.N = 0;
     changeMoney.P = 0;

     let tmp;

     tmp = Math.trunc(currency / 50);
     if (tmp !== 0) {
          currency = currency % 50;
          changeMoney.H = changeMoney.H + tmp;
     }

     tmp = Math.trunc(currency / 25);
     if (tmp !== 0) {
          currency = currency % 25;
          changeMoney.Q = changeMoney.Q + tmp;
     }

     tmp = Math.trunc(currency / 10);
     if (tmp !== 0) {
          currency = currency % 10;
          changeMoney.D = changeMoney.D + tmp;
     }

     tmp = Math.trunc(currency / 5);
     if (tmp !== 0) {
          currency = currency % 5;
          changeMoney.N = changeMoney.N + tmp;
     }

     if (currency !== 0) {
          changeMoney.P = currency;
     }

     let solution = {};

     for (let key in changeMoney) {
          if (changeMoney[key] !== 0)
               solution[key] = changeMoney[key];
     }

     return solution;
}