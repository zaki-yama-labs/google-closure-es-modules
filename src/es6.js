// es6.js

// The file that defines "goog.math" must be loaded before this statement
// executes, so the Debug Loader must be made aware of this.
const math = goog.require("goog.math");

export const CONSTANT = math.sum(1, 1, 2, 3, 5, 8, 13, 21);
