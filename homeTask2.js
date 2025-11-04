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

console.log(binarySearch([1, 3, 5, 7,9, 11, 13], 1));  //0
console.log(binarySearch([1, 3, 5, 7,9, 11, 13], 13)); // 6
console.log(binarySearch([1, 3, 5, 7,9, 11, 13], 4)); // -1

// 1)Почему бинарный поиск нельзя применять к неотсортированному массиву? 
// - потому что при передвижении флагов "первый", "последний" мы можем потерять результат, алгоритм будет "бессмысленным"
// 2) Какая сложность алгоритма бинарного поиска?
// - О(log n), а почему такая (log n это обычно log2 n), 
// потому что мы на каждом шаге делим поле поиска пополам и отбрасываем ровно половину того что нам не подходит
// 3) Какая сложность по памяти?
// - О(1), память в процессе не растет, независимо от размера массива