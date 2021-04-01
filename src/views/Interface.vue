<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script lang="ts">
interface func2Interface {
  (x: number, y: number, z: number): number
}
export default {
  setup (): unknown {
    function func1 (x: number, y: string): string {
      const str: string = x + y
      return str
    }
    const func2: func2Interface = (x, y, z) => {
      return x + y + z
    }
    const numVallue = 123
    console.log(numVallue)

    func2(1, 2, 3)
    return {
      func1,
      func2,
      list: [
        '在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）',
        '一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，输入多余的（或者少于要求的）参数，是不被允许的，除非用 ? 表示可选的参数',
        '可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了',
        'TypeScript 会将添加了默认值的参数识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制了',
        'ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数，事实上，rest 是一个数组。所以我们可以用数组的类型来定义它',
        '重载允许一个函数接受不同数量或类型的参数时，作出不同的处理'
      ]
    }
  }
}
</script>
