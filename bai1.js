// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
function solve(str) {
    const arr = [];
    for (let i of str) {
        //     console.log(i);
        arr[i] = arr[i] ? arr[i] + 1 : 1;
    }
    for (let i in str) {
        if (arr[str[i]] == 1) {
            return i;
        }
    }
    return -1;
}
// case 1:
console.log(solve('tranduong'));
// case 2:
console.log(solve('hitclubhiuhiu'));
// case 3:
console.log(solve('aabb'));