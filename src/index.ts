//請介紹二個字串方法跟數字方法

let a: string = 'Hello ,How are you?';
let c: number[] = [
    1,
    2,
    3
];
let d: number = 4;

console.log(a.includes('I am')); //搜尋特定字是否在字串中
console.log(a.endsWith('?')); //搜尋結尾是否有特定字

console.log(Math.max(...c)); //取陣列最大值
console.log(Math.cbrt(d)); //平方根


//錢錢大於一個值，叫乾爹

let money = 40000;
let limit = 500000;
if (money > 30000) {
    console.log('乾爹');
} else {
    console.log('省著用');
}
