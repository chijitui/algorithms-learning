const binarySearch = (arr: number[], target: number) => {
  let low = 0;
  let high = arr.length - 1;
  let current = averageFloor(low, high);

  while (target !== arr[current]) {

    if (current <= 0 || current >= high) {
      return -1;
    }

    if (target > arr[current]) {
      low = current;
      current = averageFloor(current, high);
    } else {
      high = current;
      current = averageFloor(low, current);
    }
  }

  return current;
}

const averageFloor = (num1: number, num2: number) => {
  return Math.floor((num1 + num2) / 2);
}

const testArr = [ 1, 5, 6, 8, 9, 11 ];

console.log(binarySearch(testArr, 9));
console.log(binarySearch(testArr, 2));
