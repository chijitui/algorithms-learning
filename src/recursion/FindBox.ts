interface Box {
  id: number;
  isTarget: boolean;
  children: Box[]
}

/**
 * 查找 🔑
 * @desc 盒子里有盒子，而盒子里的盒子又有盒子，🔑 放在某个盒子中，找到 🔑 并返回对应盒子的 id，不存在返回 -1
 * @param root - 初始化盒子
 */
const findBox = (root: Box): number => {
  for (let child of root.children) {
    if (child.isTarget) {
      return child.id;
    } else {
      return findBox(child);
    }
  }
  return -1;
};

const testRoot = {
  id: 0,
  isTarget: false,
  children: [{
    id: 1,
    isTarget: false,
    children: [{
      id: 4,
      isTarget: true,
      children: [],
    }],
  }, {
    id: 2,
    isTarget: false,
    children: [],
  }],
};

console.log(findBox(testRoot));
