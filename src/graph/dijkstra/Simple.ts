const getLessCostNode = (cost: Map<string, number>): { name: string, cost: number } => {
  let less: { name: string, cost: number } = { name: 'default', cost: Infinity };
  cost.forEach((value, key) => {
    if (value < less.cost) {
      less = { name: key, cost: value };
    }
  })
  return less;
}

/**
 * 求最短路径
 * @desc 使用 dijkstra 算法在全部路径为正权重的图中，查找起始节点到各节点的最短路径
 * @param relationGraph - 关系图
 * @param start - 起始节点
 */
const dijkstraLessCost = (relationGraph: Map<string, { name: string; cost: number; }[]>, start: string): Map<string, number> => {
  const cost = new Map();
  const result = new Map();
  const relationKeysIter = relationGraph.keys();

  let relationGraphSize = relationGraph.size;

  while (relationGraphSize > 0) {
    const value = relationKeysIter.next().value;

    cost.set(value, Infinity);
    relationGraphSize--;
  }

  cost.set(start, 0);

  while (cost.size > 0) {
    const lessCostNode = getLessCostNode(cost);
    const lessCostChildren = relationGraph.get(lessCostNode.name) || [];

    for (let node of lessCostChildren) {
      const childCost = lessCostNode.cost + node.cost;

      if (childCost < cost.get(node.name)) {
        cost.set(node.name, childCost);
      }
    }

    cost.delete(lessCostNode.name);
    result.set(`${start} => ${lessCostNode.name}`, lessCostNode.cost);
  }

  return result;
};

const testDijkstraRelationGraph = new Map([
  [ 'book', [ { name: 'cd', cost: 5 }, { name: 'poster', cost: 1 } ] ],
  [ 'cd', [ { name: 'guitar', cost: 15 }, { name: 'drum', cost: 20 } ] ],
  [ 'poster', [ { name: 'guitar', cost: 30 }, { name: 'drum', cost: 35 } ] ],
  [ 'guitar', [ { name: 'piano', cost: 20 } ] ],
  [ 'drum', [ { name: 'piano', cost: 10 } ] ],
  [ 'piano', [] ]
]);

console.log(dijkstraLessCost(testDijkstraRelationGraph, 'book'));
// Map {
//   'book => book' => 0,
//   'book => poster' => 1,
//   'book => cd' => 5,
//   'book => guitar' => 20,
//   'book => drum' => 25,
//   'book => piano' => 35 }
