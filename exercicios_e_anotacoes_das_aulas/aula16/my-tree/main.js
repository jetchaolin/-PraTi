class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(node) {
    this.children.push(node)
  }
  removeChild(value) {
    this.children = this.children.filter(child => child.value !== value)
  }
}

class Tree {
  constructor (rootValue) {
    this.root = new TreeNode(rootValue)
  }

  printTree(prefix = '', node = this.root, isLast = true) {
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value)

    const childCount = node.children.length -1
    node.children.forEach((child, index) => {
      let newIsLast = index === childCount
      let newPrefix = prefix + (isLast ? '    ' : '│   ')
      this.printTree(newPrefix, child, newIsLast)
    })
  }

  traverseDFS(callback) {
    function recurse(node) {
      callback(node)
      node.children.forEach(child => recurse(child)) 
    }
    recurse(this.root)
  }
}
const myTree = new Tree('A')

let constructorArrayNodeTreeCreation = ['B', 'C', 'D', 'E', 'F', 'G', 'H']
let [B, C, D, E, F, G, H] = constructorArrayNodeTreeCreation.map(node => node = new TreeNode(node))
let constructedNodesArray = [B, C, D, E, F, G, H]

let constructorArrayRootChildren = constructedNodesArray.slice().splice(0, 3).map(child => myTree.root.addChild(child))

let constructorArrayNodeChildren = constructedNodesArray.slice().splice(3, 5)
let constructorArrayNodeChildrenChildren = constructorArrayNodeChildren.splice(2, 3)

constructorArrayNodeChildren.map(child => B.addChild(child))
C.addChild(constructorArrayNodeChildrenChildren[0])
D.addChild(constructorArrayNodeChildrenChildren[1])

function printNode(node) {
  console.log(node.value)
}

// myTree.traverseDFS(printNode)
myTree.printTree()
// console.log(myTree.root.value, myTree.root.children.map(child => child.value))