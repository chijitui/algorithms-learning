/**
 * 01 背包问题
 * @param productList - 商品列表
 * @param maxWeight - 最大容量
 */
const packageMaxValue = (productList: { name: string, cell: number, weight: number }[], maxWeight: number): number => {
  if (maxWeight <= 0) {
    console.warn('maxWeight 应大于零！');
    return 0;
  }

  const bagMatrix: number[][] = [];
  const weightMaxIndex = maxWeight;
  const productMaxIndex = productList.length - 1;

  for (let w = 0; w <= weightMaxIndex; w++) {

    bagMatrix[w] = [];
    for (let i = 0; i <= productMaxIndex; i++) {
      const product = productList[i];

      if (w === 0) {
        bagMatrix[w][i] = 0;
        continue;
      }
      if (w < product.weight) {
        bagMatrix[w][i] = bagMatrix[w][i - 1] || 0;
        continue;
      }
      const lastValue = bagMatrix[w][i - 1] || 0;
      const surplusSpaceValue = bagMatrix[w - product.weight][i - 1] || 0;

      bagMatrix[w][i] = Math.max(surplusSpaceValue + product.cell, lastValue);
    }
  }
  return bagMatrix[weightMaxIndex][productMaxIndex];
};

const testProductList = [
  { name: 'guitar', cell: 1500, weight: 1 },
  { name: 'Hi-fi', cell: 3000, weight: 4 },
  { name: 'laptop', cell: 2000, weight: 3 },
  { name: 'iphone', cell: 2000, weight: 1 },
];

console.log(packageMaxValue(testProductList, 4)); // 4000
