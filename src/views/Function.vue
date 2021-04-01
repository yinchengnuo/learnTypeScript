<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script lang="ts">
interface func2Interface {
  (x: number, y: number): number
}
export default {
  setup (): unknown {
    function func1 (x: number, y: string): string {
      const str: string = x + y
      return str
    }
    const func2: func2Interface = (x: number, y: number): number => {
      return x + y
    }
    return {
      func1,
      func2,
      list: ['1', '2']
    }
  }
}
</script>
