var times = 0;
var quickSort = function (arr) {
  //如果数组长度小于等于1无需判断直接返回即可  
  if (arr.length <= 1) {
    return arr;
  }
  var midIndex = Math.floor(arr.length / 2); //取基准点  
  var midIndexVal = arr.splice(midIndex, 1); //取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]  
  var left = []; //存放比基准点小的数组  
  var right = []; //存放比基准点大的数组  
  //遍历数组，进行判断分配  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]); //比基准点小的放在左边数组  
    } else {
      right.push(arr[i]); //比基准点大的放在右边数组  
    }
    console.log('第' + (++times) + '次排序后：' + arr);
  }
  //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；  
  return quickSort(left).concat(midIndexVal, quickSort(right));
};
console.log(quickSort([3, 6, 8, 12, 29, 1, 3, 45]));