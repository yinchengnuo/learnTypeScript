<template>
  <ol>
    <li v-for="item in list" :key="item" v-html="item" />
  </ol>
</template>

<script lang="ts">
export default {
  setup (): { list: string[] } {
    return {
      list: [
        ''
      ]
    }
  }
}
</script>
