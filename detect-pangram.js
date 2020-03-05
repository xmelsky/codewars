// use object to create a unique keys (letters) and check it length

function isPangram(string){
    string = string.toUpperCase().match(/[A-Z]/g);
    const obj = {};
    for(const char of string) {
      obj[char] = char;
      if(Object.keys(obj).length >= 26) return true;
    }
    return false;
  }