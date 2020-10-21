# Code Test

Your mission, if you choose to accept it is to implement a scraper for MEPs (Members of the European Parliament).

## Prerequisites

You need Node installed locally, version 10.16.3 or later is recommended. We suggest using [nvm](https://github.com/creationix/nvm) to manage your node versions.

## Code style

Please refer to the `.eslintrc.json` for the ESLint configuration. General rules:

 - ES6 (babel)
 - Indentation using two spaces
 - Single quotes for strings
 - Max line length is 150 characters

## Instructions

The tools available at your disposal are built in Node.js libraries (like `http`) and the third party library [cheerio](http://npmjs.com/package/cheerio) (DOM parsing). The list of MEPs can be found here: [europarl.europa.eu/meps/en/full-list.html](https://www.europarl.europa.eu/meps/en/full-list/all).

The asynchronous function you're implementing is called `scrapeEULegislators` and it's in the file `scraper.js`. In the directory `test` we have predefined tests defined that verify the output of your implementation, you can run the tests using the command `npm test` to verify.

The structure expected by the tests is an array with each MEP, in the same order as they appear on the website with the following object structure:

    {
      name: "Name of the MEP",
      lastName: "Last name of the MEP",
      partyGroup: "Name of the party group",
      country: "Name of the country they're from",
      url: "The URL to the MEP biography page",
      image: "The URL to the image of the MEP",
    }

Feel free to separate concerns (e.g. http requests, DOM parsing) and structure it in a way that's readable and makes sense to you.

### Hints

 - Traversing the DOM with Cheerio is like using jQuery, when `map`ing a set of elements you must however always use `.get()` after the `.map()` to get the results in an array.
 - As the scraper will be performing a lot of HTTP requests and you'll most likely end up with a loop awaiting the response from each individual page, you may want to break the loop after the first iteration. The test will still pass.
 - Last name isn't as obvious as it seems with special characters, don't get too hung up on it.

Good luck!
