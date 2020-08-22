import cheerio from 'cheerio'
import rq from 'request-promise-native'

const radioWebsiteRoot = 'https://www.tsn.ca/radio/montreal-690'
const fetchAll = false;

export const parseTSNPodcasts = async () => {
  const url = `${radioWebsiteRoot}/audio`
  const page = await fetchPage(url);
  if (fetchAll) {
    for (let pageNumber = 2; pageNumber < 10; pageNumber++) {
      const redirectedURL = url; //getURLPostDirection();
      `${redirectedURL}/more-audio-7.325290?ot=example.AjaxPageLayout.ot&pageNum=${pageNumber}&dataType=json`;
    }
  }
  const podcastFile = parsePodcastInfo(page)
  legislator.url = url
  return [legislator]
}


const parsePodcastURL = async (url) => {
  const page = await fetchPage(url);
  const URL = parsePodcastInfo(page)
  legislator.url = url
  return [legislator]
}

const getLegislatorsFromMultiplePage = async () => {
  const urls = await getRPsURLs()
  let legislators = await Promise.all(
    urls.map(async url => {
      try {
        const page = await fetchPage(url)
        const legislator = { url: url }
        Object.assign(legislator, parseMEPInfo(page))
        legislator.url = url
        return legislator
      }
      catch (err) {
        console.log(`error parsing MEP: ${JSON.stringify(err)}`)
      }
    }))

  return legislators
}

const getStructuredName = fullName => {
  return { fullName, firstName: getFirstName(fullName), lastName: getLastName(fullName) }
}

const getFirstName = name => {
  const firstNames = name.split(' ').map(subName => (!isUpperCase(subName) ? subName : ''))
  return firstNames.join(' ')
}

const getLastName = (name) => {
  const lastNames = name.split(' ').map(subName => (isUpperCase(subName) ? subName : ''))
  return lastNames.join(' ').trim()
}

const isUpperCase = text => text[1] == text[1].toUpperCase()

const getRPsURLs = async (srcUrl) => {
  srcUrl = srcUrl ? srcUrl : 'https://www.europarl.europa.eu/meps/en/full-list/all'
  const urls = []
  const page = await fetchPage(srcUrl)
  const $ = cheerio.load(page)
  $('.erpl_member-list-item').map((index, element) => {
    const url = $(element).children('a').attr('href')
    if (validateUrl(url))
      urls.push(url)
  })
  return urls
}

const validateUrl = (url) => {
  return typeof url === 'string'
}

const fetchPage = async (url) => {
  return await rq.get(url)
}

const parseMEPInfo = (page) => {
  const fullName = getFullName(page)
  return {
    name: fullName.fullName,
    lastName: fullName.lastName,
    partyGroup: getParty(page)
      .split('-')[0].trim()
      .split('\n')[0].trim(),
    country: getCountry(page),
    image: getPhotoUrl(page)
  }
}

const getPhotoUrl = (page) => {
  const $ = cheerio.load(page)
  const photoUrl = $('.erpl_image-frame').children('span').children('img').attr('src')
  return `${websiteRoot}${photoUrl}`
}

const parsePodcastInfo = (page) => {
  const link = parseNowPLaying(page);
  const title = parseNowPlayingTitle(page);
  return { link, title };
}

export const parseNowPlayingTitle = (page) => {
  throw new Error('NOT IMPLEMENTED YET');
}
export const parseNowPlayingDescription = (page) => {
  throw new Error('NOT IMPLEMENTED YET');
}
export const parseNowPLaying = (page) => {
  const $ = cheerio.load(page)

  // div content-container
  // div content-wrapper
  // section content
  // div content-main
  // div audioContainer
  // article standard-audio-article
  // div article-media
  // div mejs-container svg mejs-audio
  // div mejs-inner
  // div mejs-mediaelement
  // audio .src

  // const something = $('.content-container').children('audio').attr('src')
  // console.log(`fetching podcast link: ${something}`);
  const mediaUrl = $('.mejs-mediaelement').children('audio').attr('src')
  console.log(`fetching podcast link: ${mediaUrl}`);



  // /html/body/div[3]/div[3]/section/div[3]/div[1]/article/div/div[1]/div/div[1]/audio
  // *[@id="audioPlayer_1_1512459"]

}


// const url = `${radioWebsiteRoot}/audio`
// const page = await fetchPage(url);
// parseNowPLaying(page);