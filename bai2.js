// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]

// Input: digits = [0]
// Output: [1]

// Input: digits = [9]
// Output: [1,0]
var solve = (arrs) => {
        let news = arrs.reduce(function(total, curent) {
            return total + curent;
        }, "")

        let newnumber = parseInt(news) + 1;
        return newnumber.toString().split('').map(Number)
    }
    // case 1:
console.log(solve([1, 2, 3]));
// case 2:
console.log(solve([0]));
//case 3:
console.log(solve([9]))