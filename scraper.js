const cheerio = require('cheerio');
const rq = require('request-promise-native');
const { readFileSync } = require('fs');

const radioWebsiteRoot = 'https://www.tsn.ca/radio/montreal-690';

// URL will be redirected, will not address the redirection since we get still get the sub-links in the page
const parseTSNPodcasts = async (fetchAll = false) => {
  const urls = [];
  const url = `${radioWebsiteRoot}/audio`;
  const page = await fetchPage(url);
  // pages.push(page);
  if (fetchAll) {
    const referenceUrl = getCurrentURL(page);
    for (let pageNumber = 2; pageNumber < 10; pageNumber++) {
      const extPage = (`${referenceUrl}/more-audio-7.325290?ot=example.AjaxPageLayout.ot&pageNum=${pageNumber}&dataType=json`);
    }
  }

  const podcastFile = parsePodcastInfo(page);
}

const getCurrentURL = (page) => {
  const $ = cheerio.load(page);
  const obj = $('link').get().filter(item => item.attribs.rel === 'canonical');
  return obj[0].attribs.href;
}

const parsePodcastURL = async (url) => {
  const page = await fetchPage(url);
  const URL = parsePodcastInfo(page);
  legislator.url = url;
  return [legislator];
}

const fetchPage = async (url) => {
  return await rq.get(url);
}

const parsePodcastInfo = (page) => {
  const link = parseNowPLayingMediaURL(page);
  const title = parseNowPlayingTitle(page);
  const description = parseNowPlayingDescription(page);
  return { link, title, description };
}

const parseNowPlayingTitle = (page) => {
  const $ = cheerio.load(page);
  return $('div .headline')[6].children[1].children[0].data;
}

const parseNowPlayingDescription = (page) => {
  const $ = cheerio.load(page);
  const result = $('div .headline')[6].children[3].children[0].data.split('\n').map(s => s.trim()).join(' ');
  return result;

}
const parseNowPLayingMediaURL = (page) => {
  const $ = cheerio.load(page);
  return $('audio').attr('src');
}

const parseExtensionURL = (page) => {
  const $ = cheerio.load(page);
  return $('audio').attr('src');
}

module.exports = {
  getCurrentURL,
  parseTSNPodcasts,
  parseNowPlayingTitle,
  parseNowPlayingDescription,
  parseNowPLayingMediaURL
};