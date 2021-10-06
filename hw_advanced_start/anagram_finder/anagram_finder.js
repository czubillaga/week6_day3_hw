const AnagramFinder = function (word) {
    this.word = word;
    this.chars = word.toLowerCase().split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((currentWord) => {
        let currentChars = currentWord.toLowerCase().split('');
        return currentChars.every((char) => {
           return this.chars.includes(char);
        }) && currentWord !== this.word && currentWord !== "" && currentChars.length == this.chars.length;
    });
}

module.exports = AnagramFinder;
