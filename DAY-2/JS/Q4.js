const arr = [2,4,6,6,8,8,9,10,13,15,17,21,24,26,28,36,58,78,90];
//binary search function
//returns the element index if found otherwise -1
const binarySearch = (arr, start, end, num) => {
   const mid = start + Math.floor((end - start)/2);
   if(start <= end){
      if(arr[mid] === num){
         return mid;
      }
      if(num < arr[mid]){
         return binarySearch(arr, start, mid-1, num);
      }
      if(num > arr[mid]){
         return binarySearch(arr, mid+1, end, num);
      }
   }
   return -1;
};
console.log(binarySearch(arr, 0, arr.length-1, 13));
console.log(binarySearch(arr, 0, arr.length-1, 11));




// let recursiveFunction = function (arr, x, start, end) {
	
// 	// Base Condition
// 	if (start > end) return false;

// 	// Find the middle index
// 	let mid=Math.floor((start + end)/2);

// 	// Compare mid with given key x
// 	if (arr[mid]===x) return true;
		
// 	// If element at mid is greater than x,
// 	// search in the left half of mid
// 	if(arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid-1);
// 	else

// 		// If element at mid is smaller than x,
// 		// search in the right half of mid
// 		return recursiveFunction(arr, x, mid+1, end);
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 3;

// if (recursiveFunction(arr, x, 0, arr.length-1))
// 	document.write("Element found!<br>");
// else document.write("Element not found!<br>");

// x = 7;

// if (recursiveFunction(arr, x, 0, arr.length-1))
// 	document.write("Element found!<br>");
// else document.write("Element not found!:");
						

						
