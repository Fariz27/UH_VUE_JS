<template>
  <div id="app">
    <router-view name="sidebar" />
    <router-view name="header" />
    <div class="wrapper">
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
    <router-view name="footer" />
    <aside class="control-sidebar control-sidebar-dark">
    </aside>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

