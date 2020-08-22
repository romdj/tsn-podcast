import test from 'ava'
import { scrapeEULegislators } from '../scraper'
test('legislators', async t => {
  const legislators = await scrapeEULegislators()

console.log(`legislators: ${legislators}`)
console.log(`legislators0: ${JSON.stringify(legislators[0])}`)
  t.true(Array.isArray(legislators))
  // t.is(legislators.length, 704)

  const first = legislators[0]
  t.is(first.name, 'Magdalena ADAMOWICZ')
  t.is(first.lastName, 'ADAMOWICZ')
  t.is(first.partyGroup, 'Group of the European People\'s Party (Christian Democrats)')
  t.is(first.country, 'Poland')
  t.is(first.url, 'https://www.europarl.europa.eu/meps/en/197490/MAGDALENA_ADAMOWICZ/home')
  t.is(first.image, 'https://www.europarl.europa.eu/mepphoto/197490.jpg')
})