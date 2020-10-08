
exports.handler = (event, context, callback) => {
  // const url = event.url | require('./tsnRadios.json')['Montreal'];
  const url = 'https://www.tsn.ca/radio/montreal-690';

  child.stdout.on('data', console.log);
  child.stderr.on('data', console.error);
};
