const cheerio = require('cheerio')
const rq = require('request-promise-native')
const { readFileSync } = require('fs')

const radioWebsiteRoot = 'https://www.tsn.ca/radio/montreal-690'

const parseTSNPodcasts = async (fetchAll = false) => {
  const urls = [];
  const url = `${radioWebsiteRoot}/audio`
  // const page = await fetchPage(url);
  // pages.push(page);
  if (fetchAll) {
    for (let pageNumber = 2; pageNumber < 10; pageNumber++) {
      // const redirectedURL = url;
      `${redirectedURL}/more-audio-7.325290?ot=example.AjaxPageLayout.ot&pageNum=${pageNumber}&dataType=json`;
      // const newPage = await fetchPage(url);
      // pages.push(newPage);
    }
  }
  
  const podcastFile = parsePodcastInfo(page)
}


const parsePodcastURL = async (url) => {
  const page = await fetchPage(url);
  const URL = parsePodcastInfo(page)
  legislator.url = url
  return [legislator]
}

const fetchPage = async (url) => {
  return await rq.get(url)
}

const parsePodcastInfo = (page) => {
  const link = parseNowPLayingMediaURL(page);
  const title = parseNowPlayingTitle(page);
  const description = parseNowPlayingDescription(page);
  return { link, title, description };
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