const findCriticalIndex = (arr: number[], order: boolean = true): number => {

  if (arr.length === 0) {
    return -1;
  }

  let critical_index = 0;
  
  for (let index = 1; index < arr.length; index++) {
    const isSave = order ? (arr[critical_index] > arr[index]) : (arr[critical_index] < arr[index]);

    if (isSave) {
      critical_index = index;
    }
  }

  return critical_index;
};

/**
 * 选择排序
 * @param arr - 待排序数组
 * @param order - true: 升序; false: 降序
 */
const selectionSort = (arr: number[], order: boolean = true): number[] => {
  const newArr = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const critical_index = findCriticalIndex(arr, order);

    newArr.push(arr[critical_index]);
    arr.splice(critical_index, 1);
  }

  return newArr;
}

const testArr1: number[] = [ 12, 1, 3, 2, -1, 88, 23 ];
const testArr2: number[] = [ 12, 1, 3, 2, -1, 88, 23 ];

console.log(selectionSort(testArr1, true)); // [ -1, 1, 2, 3, 12, 23, 88 ]
console.log(selectionSort(testArr2, false)); // [ 88, 23, 12, 3, 2, 1, -1 ]
