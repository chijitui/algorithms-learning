const isInterger = (length: number, width: number): boolean => {

  return (length > 0
    && width > 0
    && length % 1 === 0
    && width % 1 === 0);
};

/**
 * 分地（最小公约数）
 * @desc 将一块长宽为正整数的方形土地等分成尽可能大的正方形，正方形边长。
 * @param length - 方形长
 * @param width - 方形宽
 */

const landSeparation = (length: number, width: number): number => {

  if (!isInterger(length, width)) {

    // 长宽不为正整数
    return -1;
  }
  const difference = length - width;

  if (difference === 0) {
    return length;
  } else {
    return difference > 0 ? landSeparation(difference, width) : landSeparation(length, -difference);
  }
};

console.log(landSeparation(15, 80)) // 5
console.log(landSeparation(15.5, 80)) // -1
