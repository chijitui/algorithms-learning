const largeIntMulti = (num1: string, num2: string): string => {
  if (parseInt(num1) === NaN || parseInt(num2) === NaN) {
    console.warn('num1 或 num2 格式有误')
    return 'NaN';
  }

  const len1 = num1.length;
  const len2 = num2.length;

  if (len1 + len2 < 9) return (parseInt(num1) * parseInt(num2)).toString();

  const result: number[] = [];
  
  for (let r = 0; r < len1 + len2; r++) {
    result[r] = 0;
  }

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const multi = parseInt(num1[i]) * parseInt(num2[j]);
      const sum = multi + result[i + j + 1];

      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    }
  }
  return result.join('').replace(/\b(0+)/gi, '');
};

console.log(largeIntMulti('1', '1')); // 1
console.log(largeIntMulti('123456789', '987654321')); // 121932631112635269
