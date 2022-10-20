console.log("<-------------- Sorting Algorithms ---------------->");

let nums = [4,1,5,2,13,7,6,19,8]

console.log("bubble Sort");
function bubblesort(nums){
    for(let i = 0; i<nums.length; i++){
    let swap = false
        for(let j= 0; j <nums.length - 1; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                swap = true
            }
        }
        if(swap == false) break ;
    }
    return nums
}
console.log(bubblesort(nums))
// ------------------------------------------------------->

console.log('merge Sort + recursion')
function mergesort(nums){
    if(nums.length < 2) return nums
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return merge( mergesort(left), mergesort(right) )
}
function merge(left, right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }
    const arr1 = [...sorted, ...left, ...right]
    return arr1
}
console.log(mergesort(nums))
// ----------------------------------------------------------->

console.log("insertion Sort + no return so modify the console");
function insert(nums){
    for(let i=1; i<nums.length; i++){
    while(i >= 1 && nums[i-1] > nums[i]){
            [nums[i-1], nums[i]] = [nums[i], nums[i-1]]
            i--
        }
    }
}

insert(nums)
console.log(nums)
// --------------------------------------------------->

console.log('quick Sort + recursion')
function quicksort(nums){
    if(nums.length < 2) return nums
    let pivot = nums[nums.length - 1]
    let right = []
    let left = []
    
    for(let i =0 ; i<nums.length - 1; i++){
        if(nums[i]<pivot){
            left.push(nums[i])
        }
        else{
            right.push(nums[i])
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
}
console.log(quicksort(nums))

// ------------------------------------------------------>
console.log('selection sort')
let n = nums.length
function selectionSort(nums) {
    for(let i=0; i<n-1; i++){
        let min = i
            for(let j=i+1; j<n; j++){
                    if(nums[j] < nums[min]){
                        min = j;
                }
            }
            [nums[i], nums[min]] = [nums[min], nums[i]]
        }
    return nums
}
console.log(selectionSort(nums))