<template>
  <ol>
    <li v-for="item in list" :key="item" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { list: string[] } {
    class Person {
      public live = true
      public name: string
      public age: number
      constructor (name: string, age: number) {
        this.name = name
        this.age = age
      }
    }

    console.log(new Person('ycn', 18))
    return {
      list: [
        'TypeScript 比 JavaScript 更好更早的支持 class 语法，因此你可以放心使用 class 语法，并且 Typescript 对 class 语法做了进一步增强',
        '在 TypeScript 里，类中的所有成员都默认为 public',
        '当成员被标记成 private时，它就不能在声明它的类的外部访问',
        'protected 修饰符与 private 修饰符的行为很相似，但有一点不同， protected 成员在派生类中仍然可以访问',
        'readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化',
        'TypeScript 支持通过 getters/setters 来截取对对象成员的访问，只带有 get不带有 set的存取器自动被推断为 readonly',
        '抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法'
      ]
    }
  }
}
</script>
