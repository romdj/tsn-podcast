const rq = require('request-promise-native');
const htmlparser2 = require("htmlparser2");

const parser = new htmlparser2.Parser();
// 	{
// 		onopentag(name, attribs) {
// 			if (name === "script" && attribs.type === "text/javascript") {
// 				console.log("JS");
// 			}
// 		},
// 		ontext(text) {
// 			console.log("-->", text);
// 		},
// 		onclosetag(tagname) {
// 			if (tagname === "script") {
// 				console.log("..");
// 			}
// 		}
// 	},
// 	{ decodeEntities: true }
// );
// parser.write(
// 	"Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>"
// );
// parser.end();

start_url = 'https://www.tsn.ca/radio/montreal-690/audio'
const rootPage = rq.get(start_url)
	.then(data => {
		const parsedData = parser.parseComplete(data);
		const audioMediaURL = null;
		const otherPagesURL = null;
		// writeFileSync('./sourceTree.json', JSON.stringify(root, null, 2), 'utf8');
		console.log(parsedData);
		// let i = 0;
		// console.log(i++ + root.querySelector('.content-main'));
		// console.log(i++ + root.querySelector('#audioContainer'));
		// console.log(i++ + root.querySelector('.article-media'));
		// console.log(i++ + root.querySelector('.headline .headline-media'));
		// console.log(i++ + root.querySelector('.headline headline-media'));
		// console.log(parsedData);

	})
	.catch(err => console.log(`an error occured: ${err}`));