const moment = require('moment');
const { writeFileSync } = require('fs');
const rq = require('request-promise-native');
const useWget = true;
const intervalExampleDate = '2020-04-02';
// const intervalExampleDate = '2020-02-08';
const intervalStartDate = '2020-02-08';
const intervalEndDate = moment().format("YYYY-MM-DD");

const date = moment(intervalStartDate);


const urlStructure = [
  {
    name: 'Marc Denis',
    prefix: 'https://iphone.tsn.ca/tsnpodcasts/denny',
    dateStructure: (date) => {
      return moment(date)
        .format('MMMDYYYY')
        .toLowerCase()
    },
    suffix: '.mp3',
    weekSchedule: [0, 1, 2, 3, 4]
  },
  {
    name: 'Pierre McGuire',
    dateStructure: '',
    weekSchedule: [0, 1, 2, 3, 4]
  },
];

const marcDenis = `https://iphone.tsn.ca/tsnpodcasts/dennyapr22020.mp3`;
const rayFerraro = `https://iphone.tsn.ca/tsnpodcasts/tsnradio/RayFerraroFULLApril22020.mp3`;
const aaronWard = `https://iphone.tsn.ca/tsnpodcasts/tsnradio/AaronWardFULLApril22020.mp3`;
const darrenDreger = `https://iphone.tsn.ca/tsnpodcasts/dregsapr22020.mp3`;
const gordMiller = `https://iphone.tsn.ca/MillerMar2520.mp3`;

// console.log(moment().format('MMM'));
// console.log(urlStructure[0].dateStructure(intervalStartDate));

const iwee = urlStructure[0];

if (isIntervieweeDay(intervalExampleDate, iwee)) {
  downloadFile(getPath(intervalExampleDate, iwee), iwee);
};

function isIntervieweeDay(date, interviewee) {
  return interviewee.weekSchedule.includes(moment(date).month() - 1);
}

function downloadFile(path, interviewee) {
  console.log(`fetching: ${path}`);
  if(useWget)
  process.exec
  rq.get(path)
    .then(data => writeFileSync(`output/${interviewee.name.replace(' ', '_').toLowerCase()}${date.format('DDMMMYYYY')}.mp3`, Buffer.from(data)));
}

function getPath(date, interviewee) {
  return [interviewee.prefix, interviewee.dateStructure(date), interviewee.suffix].join('');
}
'https://iphone.tsn.ca/tsnpodcasts/dennyapr22020.mp3'