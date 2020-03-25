function duplicateEncode(word){
  word = word.toLowerCase();
  const duplicates = [...new Set(word.match(/(.)(?=.*\1)/gi))];
  return word.split('').map(char => duplicates.includes(char) && ')' || '(').join('');
}