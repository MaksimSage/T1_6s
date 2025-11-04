function binarySearch (numbers, target) {
  let first = 0
  let last = numbers.length

  while(first <= last){
    let middle = Math.floor((first + last) / 2)
    let result = numbers[middle]

    if (result === target){
      return middle
    }

    if(result > target) {
      last = middle - 1
    }else {
      first = middle + 1
    }
  }

  return -1 
}

