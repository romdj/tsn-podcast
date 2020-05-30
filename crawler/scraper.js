const { parse } = require('node-html-parser');
const { writeFileSync } = require('fs');
const rq = require('request-promise-native');


start_url = 'https://www.tsn.ca/radio/montreal-690/audio'
const rootPage = rq.get(start_url)
	.then(data => {
		const root = parse(data);
		const audioMediaURL = null;
		const otherPagesURL = null;
		// writeFileSync('./sourceTree.json', JSON.stringify(root, null, 2), 'utf8');
		// console.log(root);
		let i = 0;
		// console.log(i++ + root.querySelector('.content-main'));
		// console.log(i++ + root.querySelector('#audioContainer'));
		// console.log(i++ + root.querySelector('.article-media'));
		// console.log(i++ + root.querySelector('.headline .headline-media'));
		// console.log(i++ + root.querySelector('.headline headline-media'));
		console.log(i++ + root.querySelector('.article-media'));

	})
	.catch(err => console.log(`an error occured: ${err}`));