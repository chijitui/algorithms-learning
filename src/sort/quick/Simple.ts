/**
 * 快速排序
 * @param arr - 待排序数组
 * @param order - true: 升序; false: 降序
 */
const quickSort = (arr: number[], order: boolean): number[] => {

  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) {
        greater.push(arr[i]);
      } else {
        less.push(arr[i]);
      }
    }

    return order
      ? [ ...quickSort(less, order), pivot, ...quickSort(greater, order) ]
      : [ ...quickSort(greater, order), pivot, ...quickSort(less, order) ]
  }
}

const testQuickArr1: number[] = [ 12, 1, 3, 2, -1, 88, 23 ];
const testQuickArr2: number[] = [ 12, 1, 3, 2, -1, 88, 23 ];

console.log(quickSort(testQuickArr1, true)); // [ -1, 1, 2, 3, 12, 23, 88 ]
console.log(quickSort(testQuickArr2, false)); // [ 88, 23, 12, 3, 2, 1, -1 ]
