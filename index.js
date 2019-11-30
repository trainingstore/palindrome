module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function () {
    return this.letters().toLowerCase();
  };
  // Returns the letters in the content.
  // For example:
  //  new Phrase("Hello, world!").letters() === "Helloworld";
  this.letters = function () {
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    return (this.content.match(/[a-z]/gi) || []).join("");
  };
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function () {
    if (!!this.processedContent()){
      return this.processedContent() === (this.processedContent()).reverse();
    }
    return false;
  };
}
