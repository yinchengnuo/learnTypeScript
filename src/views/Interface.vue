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

    function get (person : Person) {
      console.log(person.name)
    }
    function set (person : Person, name = 'ycn') {
      person.name = name
    }
    get({ name: 'ycn', sex: 0, height: 200 })
    set({ name: '' })
    return {
      list: [
        '在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型',
        'TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述',
        '接口一般首字母大写，定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的，变量的形状必须和接口的形状保持一致',
        '有时我们希望不要完全匹配一个形状，那么可以用可选属性，可选属性的含义是该属性可以不存在，这时仍然不允许添加未定义的属性'
      ]
    }
  }
}
</script>
