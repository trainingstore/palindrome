### Phrase object (with palindrome detector).
This is a sample NPM module.
The module can be used as follows:

`
$ npm install --global trainingstore-palindrome<br>
$ vim test.js<br>
let Phrase = require("trainingstore-palindrome ");<br>  
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");<br>
console.log(napoleonsLament.palindrome());<br>
$ node test.js<br>
true<br>
`
