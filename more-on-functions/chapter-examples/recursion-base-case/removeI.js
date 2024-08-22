function removeI(arr) {
    if (!arr.includes("One")){
      return arr;
    } else {
      arr.splice(arr.indexOf('One'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));
