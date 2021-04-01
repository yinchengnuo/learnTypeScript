<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { type: unknown; list: string[] } {
    let init: number
    init = 1
    // init = '2'
    init = 2
    console.log(init)
    const num = 123
    const str = 'str'
    const boo = false
    const und = undefined
    const arr: number[] = [1, 2, 3]
    const tup: [number, string] = [1, '2']
    enum Color {
      Red = 1,
      Pink,
      Blue = 4
    }
    console.log(Color)
    const obj = {
      name: 'ycn',
      age: 25
    }
    // obj.age = '' // error
    // tup.push(true)
    return {
      type: { num, und, str, boo, arr, tup, obj },
      list: [
        'TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用',
        'Typescript 声明变量需要进行类型注解，但是同时 Typescript 也会对变量类型进行类型推断',
        '最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做 boolean',
        '和JavaScript一样，TypeScript里的所有数字都是浮点数，这些浮点数的类型是 number。',
        'TypeScript 用 string 表示文本数据类型，可以使用双引号（"）或单引号（\'）或模板字符串表示字符串。',
        'TypeScript 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组。第二种方式是使用数组泛型，Array<元素类型>',
        '元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同',
        'enum类型是对JavaScript标准数据类型的一个补充。 像其它语言一样，使用枚举类型可以为一组数值赋予友好的名字',
        'TypeScript 用 any 类型来标记不清楚类型的变量',
        'void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void',
        'TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大',
        'TypeScript 用 never 类型表示的是那些永不存在的值的类型',
        '当在你清楚地知道一个实体具有比它现有类型更确切的类型，你可以通过断言告诉进行类似类型转换的功能。类型断言有两种形式，其一是“尖括号”语法，另一个为as语法'
      ]
    }
  }
}
</script>
