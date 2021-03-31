<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

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
