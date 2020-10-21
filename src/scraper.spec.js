const { parseNowPLayingMediaURL, parseNowPlayingTitle, parseNowPlayingDescription, getCurrentURL } = require('./scraper')
const { readFileSync } = require('fs')

describe('TSN Parsing Validation', () => {
  let page;
  beforeEach(() => {
    page = readFileSync('__test_data__/unit/sampleMTLPage.html')
  })
  it('test for media URL', () => {
    expect(parseNowPLayingMediaURL(page)).toMatch('https://iphone.tsn.ca/HabsPostGameAugust212020.mp3');
  });
  it('test for media title', () => {
    expect(parseNowPlayingTitle(page)).toMatch('Habs PostGame Show : The Longest Season Ends ')
  });
  it('test for media description', () => {
    expect(parseNowPlayingDescription(page)).toMatch('In the longest NHL season ever for the Habs, they were finally eliminated, losing Game 6 to the Flyers. After the game, Campbell and Gallo broke it all down for the final time……this season.')
  });
  it('test for media page URL', () => {
    expect(getCurrentURL(page)).toMatch('https://www.tsn.ca/radio/montreal-690/habs-postgame-show-the-longest-season-ends-1.1512870');
  });
})
