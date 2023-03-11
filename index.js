#!/usr/bin/env

const readline = require("readline");
var bd = require("js-big-decimal");
const bigDecimal = require("js-big-decimal");
// input
// <BTCUSD rate> <ETHUSD rate> <DOGEUSD rate>
// <ETHSALE rate> <SALE decimal places><Purchase currency> <BTC /ETH/DOGE purchase amount>

//output
// </amount of SALE expected, rounded to a given decimal>

var firstLine = true;
var BTCUSD = 0;
var ETHUSD = 0;
var DOGEUSD = 0;
var ETHSALE = 0;
var dec = 0;
var currency = "";
var amt;
var XXXSALE = 0;
var res = ""
const rl = readline.createInterface({
  input: process.stdin,
});
rl.on("line", (line) => {
  if (firstLine) {
    var rates = line.split(" ");
    firstLine = false;
    BTCUSD = (rates[0]);
    ETHUSD = (rates[1]);
    DOGEUSD = (rates[2]);
  } else {
    var inputs = line.split(" ");

    ETHSALE = parseFloat(inputs[0]);

    dec = parseFloat(inputs[1]);
    currency = inputs[2];

    amt = parseFloat(inputs[3]);
    let SALEUSD = parseFloat(ETHUSD) / ETHSALE;

    switch (currency) {
      case "BTC":
        XXXSALE = BTCUSD / SALEUSD * amt;
        break;
      case "ETH":
        XXXSALE = (ETHUSD / SALEUSD) * amt;
        break;
      default:
        XXXSALE = (DOGEUSD / SALEUSD) * amt;
        break;
    }
    console.log(bd.round(XXXSALE, dec, bd.RoundingModes.DOWN));
  }
});
