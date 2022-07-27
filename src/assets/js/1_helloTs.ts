let a: number = 1
let b: number = 2
let c: any = "3"
// 类型断言，可以用来告诉解析器变量的实际类型
// 语法
// 变量 as 类型
// < 类型 > 变量
b = c as number
b = <number>c
console.log(b)