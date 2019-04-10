/**
 * 关系查找
 * @desc 使用广度优先来查询 end 是否在 start 的关系中。
 * 
 * @param relationGraph - 关系图
 * @param start - 起始节点
 * @param end - 终止节点
 * 
 * @return result - 是否存在
 * @return searched - 查询过的节点
 */
const bfsRelationSearch = (relationGraph: Map<string, string[]>, start: string, end: string): { result: boolean, searched: string[] } => {
  const searchQueue: string[] = [];
  const startRelation = relationGraph.get(start) || [];
  const searched: string[] = [];

  searchQueue.push(...startRelation);
  
  while (searchQueue.length > 0) {
    const check = searchQueue.shift() || '';

    if (!searched.includes(check)) {
      searched.push(check);

      if (check === end) {
        return {
          result: true,
          searched
        };
      } else {
        const checkRelationList = relationGraph.get(check) || [];

        searchQueue.push(...checkRelationList);
      }
    }
  }
  return {
    result: false,
    searched
  };
};

const testRelationGraph = new Map([
  [ 'you', [ 'alice' , 'bob', 'claire' ] ],
  [ 'bob', [ 'anuj', 'peggy' ] ],
  [ 'alice', [ 'peggy' ] ],
  [ 'claire', [ 'thom', 'jonny' ] ],
  [ 'anuj', [] ],
  [ 'peggy', [] ],
  [ 'thom', [] ],
  [ 'jonny', [] ]
]);

console.log(bfsRelationSearch(testRelationGraph, 'you', 'thom'));
// { result: true,
//   searched: ['alice', 'bob', 'claire', 'peggy', 'anuj', 'thom'] }

console.log(bfsRelationSearch(testRelationGraph, 'bob', 'you'));
// { result: false,
//   searched: [ 'anuj', 'peggy' ] }
