/// <reference path="utility-functions.ts" />


console.log(Utility.Fees.calculateLateFee(3));
console.log(Utility.Fees.calculateLateFee(12));

import util = Utility.Fees;
console.log(util.calculateLateFee(0));
