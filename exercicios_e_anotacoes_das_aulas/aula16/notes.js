// 1. Arvores tem raiz, nós e folhas
// 2. O graús de um nó depende da quantidade de seus filhos
// 3. A profundidade de um nó depende da quantidade de seus ancestrais 
// (altura e profundidade são comumente análogas) (Raiz A -> B -> C) <- 2 níveis (Conte os níveis com base nas setas)
// 4. Arvores podem ter subarvores
// 5. Multiplos nós filhos de um mesmo nó são irmãos

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
  constructor(rootValue) {
      this.root = new TreeNode(rootValue);
  }

  printTree(node = this.root, prefix = '', isLast = true) {
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value);

    const childCount = node.children.length;
    node.children.forEach((child, index) => {
      const isLastChild = index === childCount - 1;
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      this.printTree(child, newPrefix, isLastChild);
  })}

  traverseDFS(callback) {
    function recurse(node) {
      callback(node)
      node.children.forEach(child => recurse(child)) 
    }
    recurse(this.root)
  }
}

const tree = new Tree('A')

const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)

G.addChild(H)

function printNode(node) {
  console.log(node.value)
}

// tree.traverseDFS(printNode)

tree.printTree()
