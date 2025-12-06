
// определеяем опорный эл-т
function partition(arr, low, high){
    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        if(arr[j] <= pivot)  {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]  //обмен влево если опорный больше
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]] 
    return i + 1
}


export  function quickSortIterative(arr) {
    if(arr.length <= 1) return arr

    const stack = [[0, arr.length - 1]];
//после определения индекса опорноного заполняем стек, разделяя по нему
    while(stack.length > 0){
        const [low, high] = stack.pop()
        
        if(low < high) {
            const pIndex = partition(arr, low, high)

            //кладем правую часть с условием в длину минимум 2
            if(low < pIndex - 1) {
                stack.push([low, pIndex - 1])
            } 

            //кладем правую часть с условием в длину минимум 2
            if(pIndex + 1 < high) {
                stack.push([pIndex + 1, high])
            }
        }
    }
     return arr
}
