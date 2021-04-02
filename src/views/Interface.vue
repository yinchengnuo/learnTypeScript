<template>
  <ol>
    <li v-for="item in list" :key="item" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { list: string[] } {
    interface Person {
      name: string,
      age?: number,
      [_: string]: unknown
    }

    interface Test {
      name?: string,
      age?: number
    }

    function get (person : Person) {
      console.log(person.name)
    }
    function set (person : Person, name = 'ycn') {
      person.name = name
    }
    get({ name: 'ycn', sex: 0, height: 200 })
    set({ name: '' })

    function setTest (test: Test) {
      console.log(test)
    }
    setTest({ a: 123 } as Test)

    interface mockInterface {
      currentTime: Date
    }

    class Mock implements mockInterface {
      currentTime = new Date()
      constructor (public x: number, public y: number) {
        console.log(123)
      }
    }

    console.log(new Mock(1, 2))

    return {
      list: [
        '在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型',
        'TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape」进行描述',
        '接口一般首字母大写，定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的，变量的形状必须和接口的形状保持一致',
        '有时我们希望不要完全匹配一个形状，那么可以用可选属性，可选属性的含义是该属性可以不存在，这时仍然不允许添加未定义的属性',
        '一些对象属性只能在对象刚刚创建的时候修改其值，你可以在属性名前用 readonly 来指定只读属性',
        'TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改',
        '接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型',
        'TypeScript也能够用它来明确的强制一个类去符合某种契约',
        '和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里'
      ]
    }
  }
}
</script>
