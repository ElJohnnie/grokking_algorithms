const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E', 'B', 'G', 'H'],
    'G': ['A'],
    'H': ['B']
  };
  
  function bfs(graph, start, target) {
    const visited = {};
    const parents = {};
    const queue = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (vertex === target) {
        const path = [target];
        let parent = parents[target];

        while (parent) {
          path.unshift(parent);
          parent = parents[parent];
        }

        return path;
      }
  
      for (const neighbor of graph[vertex]) {

        if (!visited[neighbor]) {
            visited[neighbor] = true;
            parents[neighbor] = vertex;
            queue.push(neighbor);
        }

      }
    }
  
    return null;
  }
  
  console.log('Caminho mais curto de C para H:', bfs(graph, 'A', 'E'));
  