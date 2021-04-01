<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): unknown {
    const num : number = 123
    const str : string = 'str'
    const boo : boolean = false
    const und : undefined = undefined
    const arr : number[] = [1, 2, 3]
    const tup : [number, string] = [1, '2']
    enum Color {
      Red = 1,
      Pink,
      Blue = 4
    }
    console.log(Color)
    // tup.push(true)
    return {
      type: {
        num,
        und,
        str,
        boo,
        arr,
        tup
      },
      list: ['1', '2']
    }
  }
}
</script>
