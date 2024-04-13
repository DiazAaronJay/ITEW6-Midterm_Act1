<template>
  <div id="app">
    <header class="header">
      <nav>
        <div class="nav-links">
          <router-link to="/books">Books</router-link>
          <router-link to="/cart">Cart</router-link>
        </div>
        <button v-if="isAuthenticated" @click="logout" class="logout-button">Logout</button>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.commit('SET_AUTHENTICATED', false); 
      this.$router.push('/login');
    },
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f1e5;
  color: #4b3f38;
}

.header {
  background-color: #56433d;
  color: #f8f1e5;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
}

nav a {
  text-decoration: none;
  color: #f8f1e5;
  transition: color 0.3s ease;
  margin-right: 20px;
}

nav a:hover {
  color: #f5e1da;
}

.logout-button {
  background-color: #7b5d4d;
  color: #f8f1e5;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #56433d;
}
</style>
