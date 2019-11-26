//Reverse a string
function reverse(string) {
  // return string.split("").reverse().join("");
  return Array.from(string).reverse().join("");
}

// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings.
String.prototype.blank = function () {
  if (this.length === 0) return true;
  return !!this.match(/^\s+$/);
}

// Adds `last` to all arrays
Array.prototype.last = function () {
  if (this.length === 0) return 'Array is empty';
  return this[this.length - 1];
}

// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function (string) {
    return string.toLowerCase();
  }
  // Returns content processed for palindrome testing.
  this.processedContent = function () {
    return this.processor(this.content);
  }
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function () {
    return this.processedContent() === reverse(this.processedContent());
  };
  // Makes the phrase LOUDER.
  this.louder = function () {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//   // Returns translation processed for palindrome testing.
//   this.processedContent = function () {
//     return this.processor(this.translation);
//   }
// }
// TranslatedPhrase.prototype = new Phrase();
