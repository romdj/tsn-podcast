const cheerio = require('cheerio')
const rq = require('request-promise-native')
const { readFileSync } = require('fs')

const radioWebsiteRoot = 'https://www.tsn.ca/radio/montreal-690'
const fetchAll = false;

const parseTSNPodcasts = async () => {
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

const parsePodcastInfo = (page) => {
  const link = parseNowPLayingMediaURL(page);
  const title = parseNowPlayingTitle(page);
  return { link, title };
}

const parseNowPlayingTitle = (page) => {
  const $ = cheerio.load(page)
  return $('div .headline')[6].children[1].children[0].data;
}

const parseNowPlayingDescription = (page) => {
  const $ = cheerio.load(page)
  const result = $('div .headline')[6].children[3].children[0].data.split('\n').map(s => s.trim()).join(' ');
  return result;

}
const parseNowPLayingMediaURL = (page) => {
  const $ = cheerio.load(page)
  return $('audio').attr('src');
}

module.exports = {
  parseTSNPodcasts,
  parseNowPlayingTitle,
  parseNowPlayingDescription,
  parseNowPLayingMediaURL
};