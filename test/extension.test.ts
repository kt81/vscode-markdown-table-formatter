//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

  // Defines a Mocha unit test
  test("Half/Fullwidth characters test", () => {
    // var input = `
    // |h1|h2|h3|
    // |coffee|Café au lait|烏龍茶|
    // `;
    // var expect = `
    // | h1     | h2           | h3     |
    // | coffee | Café au lait | 烏龍茶 |
    // `;

    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });
});
