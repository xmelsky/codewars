// https://www.codewars.com/kata/525a037c82bf42b9f800029b/javascript

function partitionOn(pred, items) {
    let result = 0;
    for (let i=0, y=items.length; i<y; i++ ) {
      if ( pred(items[i]) && i + result < y ){
        items.push(items.splice(i,1)[0]);
        result++;
        i--;
      }
    }
    return items.length - result;
  }