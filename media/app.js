const moment = require('moment');
const { writeFileSync } = require('fs');
const rq = require('request-promise-native');
const useWget = true;
const intervalExampleDate = '2020-04-02';
const { exec } = require("child_process");
// const intervalExampleDate = '2020-02-08';
const intervalStartDate = '2020-02-08';
const intervalEndDate = moment().format("YYYY-MM-DD");

const date = moment(intervalStartDate);


const urlStructure = [
  {
    fullName: 'Marc Denis',
    firstName: 'Marc',
    lastName: 'Denis',
    weekSchedule: [0, 1, 2, 3, 4]
  },
  {
    fullName: 'Ray Ferraro',
    firstName: 'Ray',
    lastName: 'Ferraro',
    weekSchedule: [1, 3]
  },
  {
    fullName: 'Andrew Zadarnowski',
    firstName: 'Andrew',
    lastName: 'Zadarnowski',
    weekSchedule: [6]
  },
  {
    fullName: 'Pierre McGuire',
    firstName: 'Pierre',
    lastName: 'McGuire',
    weekSchedule: [0, 1, 2, 3, 4]
  },
  {
    fullName: 'Bob McKenzie',
    firstName: 'Bob',
    lastName: 'McKenzie',
    weekSchedule: []
  },
  {
    fullName: 'Marc Dumont',
    firstName: 'Marc',
    lastName: 'Dumont',
    weekSchedule: []
  },
  {
    fullName: 'Aaron Ward',
    firstName: 'Aaron',
    lastName: 'Ward',
    weekSchedule: [1,3]
  },
  {
    fullName: 'Darren Dreger',
    firstName: 'Darren',
    lastName: 'Dreger',
    weekSchedule: []
  },
  {
    fullName: 'Gord Miller',
    firstName: 'Gord',
    lastName: 'Miller',
    weekSchedule: []
  },
  {
    fullName: 'Michael Farber',
    firstName: 'Michael',
    lastName: 'Farber',
    weekSchedule: []
  },
  {
    fullName: 'Eric Macramalla',
    firstName: 'Eric',
    lastName: 'Macramalla',
    weekSchedule: []
  },
];


const arponBasu = [
  'https://iphone.tsn.ca/basumar2420.mp3',
];
const marcDenis = [
  'https://iphone.tsn.ca/tsnpodcasts/denismar252020.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/denmar272020.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/denmar302020.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/dennyapr22020.mp3',
];
const bobMckenzie = [
  'https://iphone.tsn.ca/tsnpodcasts/mckmar252020.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/mckapr32020.mp3'
];
const marcDumont = [
  'https://iphone.tsn.ca/tsnpodcasts/dumomar252020.mp3'
];
const rayFerraro = [
  'https://iphone.tsn.ca/FerraroMar2420.mp3',
  'https://iphone.tsn.ca/FerraroMar2620.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/RayFerraroFULLApril22020.mp3',
  'https://iphone.tsn.ca/FerraroApr0920.mp3',

];
const aaronWard = [
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/AaronWardFULLApril22020.mp3'
];
const darrenDreger = [
  'https://iphone.tsn.ca/tsnpodcasts/dregsapr22020.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/dregmar262020.mp3'
];
const gordMiller = [
  'https://iphone.tsn.ca/MillerMar2520.mp3'
];
const others = [
  'https://iphone.tsn.ca/CammalleriApr0620.mp3',
];
const michaelFarber = [
  'https://iphone.tsn.ca/FarberApr0620.mp3',
];
const ericMacramalla = [
  'https://iphone.tsn.ca/tsnpodcasts/macapr22020.mp3'
];
const pierreMcGuire = [
  'https://iphone.tsn.ca/McGuireMar2320.mp3',
  'https://iphone.tsn.ca/McGuireMar2520.mp3',
  'https://iphone.tsn.ca/McGuireMar2620.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuireApril32020.mp3',
  'https://iphone.tsn.ca/McGuireApr0620.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire130420.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire100420.mp3',
  'https://iphone.tsn.ca/McGuireApr0920.mp3',
  'https://iphone.tsn.ca/McGuireApr0820.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire42720.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire42820.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire010520.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire300420.mp3',
  'https://iphone.tsn.ca/McGuireApr2120.mp3',
  'https://iphone.tsn.ca/McGuireApr2120.mp3',
  'https://iphone.tsn.ca/McGuireMay1220.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire010520.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire300420.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire040520.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire050520.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire060520.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire070520.mp3',
  'https://iphone.tsn.ca/McGuireMay1120.mp3',
  'https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire080520.mp3',
  'https://iphone.tsn.ca/McGuireMay1320.mp3'
];

// console.log(moment().format('MMM'));
// console.log(urlStructure[0].dateStructure(intervalStartDate));

// const iwee = urlStructure[0];

// if (isIntervieweeDay(intervalExampleDate, iwee)) {
// downloadFile(getPath(intervalExampleDate, iwee), iwee);
// };

function isIntervieweeDay(date, interviewee) {
  return interviewee.weekSchedule.includes(moment(date).month() - 1);
}

function downloadFile(path, interviewee) {
  console.log(`fetching: ${path}`);
  if (useWget)
    process.exec
  rq.get(path)
    .then(data => writeFileSync(`output/${interviewee.name.replace(' ', '_').toLowerCase()}${date.format('DDMMMYYYY')}.mp3`, Buffer.from(data)));
}

function getPath(date, interviewee) {
  return [interviewee.prefix, interviewee.dateStructure(date), interviewee.suffix].join('');
}
// 'https://iphone.tsn.ca/tsnpodcasts/dennyapr22020.mp3'

function getMP3File(url) {
  rq.get('https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire42020.mp3')
    .then(data => {
      console.log('ok')
    })
    .catch(err => console.log(err))
  // const dataBuffer = Buffer.from(data); writeFileSync('output.mp3', data)
}
// getMP3File('https://iphone.tsn.ca/McGuireApr2120.mp3');
// getMP3File('https://iphone.tsn.ca/tsnpodcasts/tsnradio/McGuire42020.mp3');


function findWorkingURL(urls) {

}

function generateAllURLs(isTsn, analyst, date) {
  const providerPrefix = isTsn ? getTSNURLPrefix() : null;
  const analystStrings = getAnalystStr(analyst);
  const dateFormats = getDateFormats(date);
  return cartesianProduct([providerPrefix, analystStrings, dateFormats]);
}


const getAnalystStr = (analyst) => {
  return [
    analyst.lastName.replace(' ', ''),
    analyst.lastName.replace(' ', '').toLowerCase(),
    analyst.lastName.replace(' ', '').toLowerCase().slice(0, 3),
    analyst.lastName.replace(' ', '').toLowerCase().slice(0, 4),
    analyst.fullName.replace(' ', ''),
    analyst.fullName.replace(' ', '').toLowerCase(),
    analyst.firstName.replace(' ', ''),
    analyst.firstName.replace(' ', '').toLowerCase(),
  ];
};

const getDateFormats = (date) => {
  return [
    date.format("DDMMYY"),
    date.format("MDDYY"),
    date.format("MMMDDYY"),
    date.format("MMMDDYY").toLowerCase()
  ];
}

const getTSNURLPrefix = () => { return ['https://iphone.tsn.ca/', 'https://iphone.tsn.ca/tsnpodcasts/', 'https://iphone.tsn.ca/tsnpodcasts/tsnradio/'] };

// const getURL = (urlTSNPrefix, analyst, formattedDate) => {
//   return `${urlTSNPrefix}${analyst}${formattedDate}`;
// }

function cartesianProduct(arr) {
  return arr.reduce((a, b) => {
    return a.map(x => {
      return b.map(y => {
        return x.concat([y]);
      })
    })
      .reduce((a, b) => { return a.concat(b) }, [])
  }, [[]])
    .map(item => item.join(''));
}


console.log(generateAllURLs(true, urlStructure[3], moment()));