<template>
  <ol>
    <li v-for="item in list" :key="item" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { list: string[] } {
    enum Enum1 {
      a, b, c
    }
    enum Enum2 {
      a = 'a',
      b = 'c',
      c = 'c'
    }
    enum Enum3 {
      A = 1,
      B
    }
    enum Enum4 {
      A,
      B = 'yyy'
    }
    console.log(Enum1, Enum1.a)
    console.log(Enum2, Enum2.a)
    console.log(Enum3, Enum3.A)
    console.log(Enum4, Enum4.B)
    return {
      list: [
        '使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。',
        '字符串枚举是不可以做双向映射的。把数字枚举和字符串枚举混用，就形成了异构枚举，这种方式很容易引起混淆，不推荐使用。',
        '在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。',
        '枚举成员的值不可修改，枚举成员可以分为常量的和需要计算的。',
        '常量枚举成员会在编译时计算出结果，然后以常量的形式，出现在运行时环境，需要计算的枚举成员的值不会在编译阶段计算，而是保留到程序的执行阶段。',
        '常量枚举其实就是是在 enum 关键字前使用 const 修饰符 常量枚举会在编译阶段被移除。',
        '当我们不需要一个对象，而需要对象的值，就可以使用常量枚举，这样就可以避免在编译时生成多余的代码和间接引用。',
        '常量枚举成员在使用的地方被内联进来，且常量枚举不可能有计算成员'
      ]
    }
  }
}
</script>
