<template>
  <ol>
    <li v-for="item in list" :key="item" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { list: string[] } {
    function echo<T> (arg: T): T {
      console.log(arg)
      return arg
    }

    echo('echo')
    echo(666)
    echo(false)

    interface Person {
      name: string,
      age: number
    }

    const person: Person = {
      name: 'ycn',
      age: 18
    }

    console.log(person)

    type GetNewPerson<T> = { [P in keyof T]?: T[P] }

    type NewPerson = GetNewPerson<Person> & { phone: string }

    const newPerson: NewPerson = {
      phone: '18338112210'
    }

    console.log(newPerson)

    return {
      list: [
        '泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。',
        '定义泛型的时候，可以一次定义多个类型参数，同时我们需要传入符合约束类型的值，必须包含必须的属性',
        '<a href="https://blog.csdn.net/azl397985856/article/details/106913210" target="_blank">你不知道的 TypeScript 泛型（万字长文，建议收藏）</a>'
      ]
    }
  }
}
</script>
