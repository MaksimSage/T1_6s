class Node {
    constructor(v){
        this.value = v
        this.neighbors = new Set()
    }

    _isValid(node) {
        return node && node !== this
    }

    addNeighbor(node) {
        if(this._isValid(node)){
            this.neighbors.add(node)
        }
    }

    removeNeighbor(node) {
        this.neighbors.delete(node)
    }

}
 

class Graph {
  constructor() {
    this.nodes = []
  }

  addNode(value) {
    const node = new Node(value)
    this.nodes.push(node)

    console.log('Добавлен узел')
  }

  _findNode(value) {
    return this.nodes.find(node => node.value === value)
  }

  addEdge(value1, value2) {
    const node1 = this._findNode(value1)
    const node2 = this._findNode(value2)

    if(node1 && node2) {
        node1.addNeighbor(node2)
        node2.addNeighbor(node1)
        console.log(`ребро ${node1} - ${node2} добавлено`)
    }else{
        console.log('Не найден узел')
    }
  }

  removeNode(value) {
    const nodeToRemove = this._findNode(value);

    if (!nodeToRemove) return;

    nodeToRemove.neighbors.forEach(neighbor => {
      neighbor.removeNeighbor(nodeToRemove);
    });

    this.nodes = this.nodes.filter(node => node !== nodeToRemove);
    
    console.log('Узел удален')
  }

  getValues() {
    return this.nodes.map(node => node.value);
  } 
}