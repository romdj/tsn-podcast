const { parseNowPLaying, parseNowPlayingTitle, parseNowPlayingDescription } = require('./scraper')
const { readFileSync } = require('fs')

describe('TSN Parsing Validation', () => {
  let page;
  beforeEach(() => {
    page = readFileSync('./test/data/sampleMTLPage.html')
  })
  it('test for media URL', () => {
    expect(parseNowPLaying(page)).to.equal('https://iphone.tsn.ca/HabsPostGameAugust212020.mp3');
  });
  it('test for media title', () => {
    expect(parseNowPlayingTitle(page)).to.equal('Habs PostGame Show : The Longest Season Ends ')
  });
  it('test for media description', () => {
    expect(parseNowPlayingDescription(page)).to.equal('In the longest NHL season ever for the Habs, they were finally\
  eliminated, losing Game 6 to the Flyers. After the game, Campbell and Gallo\
  broke it all down for the final time&hellip;&hellip;this season.')
  })
})
