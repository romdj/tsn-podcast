import test from 'ava'
import { parseNowPLaying } from '../scraper'
import { readFileSync } from 'fs'

const page = readFileSync('./test/data/sampleMTLPage.html');
test('tsn podcast scraper (ava, cheerio)', async t => {
  const something = parseNowPLaying(page);
  console.log(`something!: ${something}`);

  // const first = legislators[0]
  // t.is(first.name, 'Magdalena ADAMOWICZ')
  // t.is(first.lastName, 'ADAMOWICZ')
  // t.is(first.partyGroup, 'Group of the European People\'s Party (Christian Democrats)')
  // t.is(first.country, 'Poland')
  // t.is(first.url, 'https://www.europarl.europa.eu/meps/en/197490/MAGDALENA_ADAMOWICZ/home')
  // t.is(first.image, 'https://www.europarl.europa.eu/mepphoto/197490.jpg')
})