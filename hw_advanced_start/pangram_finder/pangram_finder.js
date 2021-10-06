const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase().split('');
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((character) => {
    return this.phrase.includes(character);
  });
}

module.exports = PangramFinder;
