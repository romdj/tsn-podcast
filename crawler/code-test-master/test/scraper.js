import test from 'ava'
import { parseNowPLaying, parseNowPlayingTitle, parseNowPlayingDescription } from '../scraper'
import { readFileSync } from 'fs'

const page = readFileSync('./test/data/sampleMTLPage.html');
test('test for media URL', async t => {
  t.is(parseNowPLaying(page), 'https://iphone.tsn.ca/HabsPostGameAugust212020.mp3')
});
test('test for media title', async t => {
  t.is(parseNowPlayingTitle(page), 'Habs PostGame Show : The Longest Season Ends ')
});
test('test for media description', async t => {
  t.is(parseNowPlayingDescription(page), 'In the longest NHL season ever for the Habs, they were finally\
  eliminated, losing Game 6 to the Flyers. After the game, Campbell and Gallo\
  broke it all down for the final time&hellip;&hellip;this season.')
})