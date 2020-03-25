
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/javascript

function topThreeWords(text) {
    const resultCount = 3;
    const result = [];
    const wordsMap = new Map();
    let word = '';
    for (let i = 0; i <= text.length; i++) {
      if (text[i] && /[a-zA-Z0-9']/.test(text[i])) {
        word += text[i];
      } else if (word.length && word !=="'") {
        word = word.toLowerCase();
        wordsMap.set(word, wordsMap.get(word) + 1 || 1 );
        word = '';
      }
    }

    [...wordsMap.entries()].map(el => {
      for (let i = 0; i < resultCount; i++) {
        if (!result[i] || el[1] > result[i][1]) {
          result.splice(i,0,el);
          break;
        }
      }
    });
    return [...new Map(result).keys()].slice(0, resultCount);
  }