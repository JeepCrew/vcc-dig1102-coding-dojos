/**
 * What did we do well?
 * 
 * - Spectating helps.
 * - Good Teamwork!
 * - Output for error messages AND passes
 * - tests.forEach()
 * 
 * What should we improve?
 * 
 * - problem detection: which test is failing?
 * - shortcuts PLZ!
 * - talk as pairs
 * - more baby steps
 * 
 * Did we meet our goals?
 * 
 * - learn: check!
 * - communicate: check!
 * - teamwork: check!
 * - practice: check!
 * - fun: check!
 * - solved: NEVER!
 */

var assert = require('assert'),
    calculator = require('./2014-03-28-code.js');

/**
 * Test plan for addition():
 * 
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  -2
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  +0
 *   +0 |  -1 |  -1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  +1
 *   +1 |  -1 |  +0
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +2
 */

/**
 * Test plan for subtraction():
 * 
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  +0
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  -2
 *   +0 |  -1 |  +1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -1
 *   +1 |  -1 |  +2
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +0
 */

/**
 * Test plan for multiplication():
 * 
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +0
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +0
 *   +1 |  +1 |  +1
 */
var tests = [
    [ -1, -1, +1 ],
    [ -1, +0, +0 ],
    [ -1, +1, -1 ],
    [ +0, -1, +0 ],
    [ +0, +0, +0 ],
    [ +0, +1, +0 ],
    [ +1, -1, -1 ],
    [ +1, +0, +0 ],
    [ +1, +1, +1 ],
];

tests.forEach(function(row){
    var a = row[0],
        b = row[1],
        c = row[2];
        
    assertEqual(calculator.multiply(a, b), c);
});

function assertEqual(actual, expected, message){
    assert.equal(actual, expected, message);
    console.log('pass!');
}

 /**
 * Test plan for division():
 * 
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +NaN
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +NaN
 *   +0 |  +1 |  +0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +NaN
 *   +1 |  +1 |  +1
 */
 
var tests = [
    [-1, -1, +1],
    [-1, +0, null],
    [-1, +1, -1],
    [+0, -1, +0],
    [+0, +0, null],
    [+0, +1, +0],
/* // Not running...
    [+1, -1, -1],
    [+1, +0, null],
    [+1, +1, +1],
// */
];
assert.equal(calculator.divide(+0, -1), +0, "fail!");
tests.forEach(function(row){
    var a = row[0],
        b = row[1],
        c = row[2];
    assertEqual(calculator.divide(a, b), c, "fail on " + row);
});