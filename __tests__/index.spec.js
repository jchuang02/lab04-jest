'use strict';

import * as fs from 'fs'; //import functions for working with file system
const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content

/* Your tests go here */
describe('check for DANGER', function() {
  it('should show alert', function() {
    expect(document.querySelector('d-none')).toEqual(null);
  });
});
