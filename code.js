function augmentingPath(graph, start, end) {
    var visitedNodes = [];
    function recursive(node){
        if (node === end){
            return [node];
        }
        visitedNodes.push(node);
        for (var edge in graph[node]){
            if (!visitedNodes.includes(edge)){
                if (graph[node][edge] > 0){
                    var path = recursive(edge);
                    if (path.length > 0){
                        return [node].concat(path);
                    }
                }
            }
        }
        return [];
    }
    return recursive(start);
}
