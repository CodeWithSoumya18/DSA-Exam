// Remove duplicates from a sorted array in-place.

function removeDuplicates(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;

      arr[i] = arr[j];
    }
  }

  return i + 1;
}

let arr = [1, 1, 2, 2, 3, 4, 4];

let length = removeDuplicates(arr);

console.log(length);

console.log(arr.slice(0, length));
