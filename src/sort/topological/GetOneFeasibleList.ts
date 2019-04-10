interface RelationNode {
  name: string,
  key: number,
  dependencies: RelationNode[]
}

const getOneFeasibleList = (relationRoot: RelationNode): RelationNode[] => {
  let todoList: RelationNode[] = [ relationRoot ];

  for (let dependence of relationRoot.dependencies) {
    const addList = getOneFeasibleList(dependence);

    todoList = [ ...todoList, ...addList ];
  }

  return todoList;
};

const testRelationRoot = {
  key: 0,
  name: 'todo 1',
  dependencies: [{
    key: 1,
    name: 'todo 2',
    dependencies: [{
      key: 3,
      name: 'todo 3',
      dependencies: [],
    }],
  }, {
    key: 2,
    name: 'todo 4',
    dependencies: [],
  }],
};

console.log(getOneFeasibleList(testRelationRoot));
