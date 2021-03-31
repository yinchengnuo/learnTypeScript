
<template>
  <div id="nav">
    <router-link v-for="(route, index) in routes" :key="index" replace :to="route.path">
      <span>{{ route.name }}</span>
      <span v-if="index < routes.length - 1" style="margin: 12px;">|</span>
    </router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { routes } from '@/router'
export default {
  setup () : unknown {
    return { routes }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-break: break-all;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  line-height: 2;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 80vw;
  font-size: 24px;
  user-select: none;
  justify-content: center;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul, ol {
  display: inline-block;
  li {
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    &::marker {
      font-size: 2em;
      line-height: 2;
      font-weight: bold;
    }
  }
}
</style>
