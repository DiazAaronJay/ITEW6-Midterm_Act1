<template>
    <div class="login-page">
      <h2>Book Store Login</h2>
      <div class="login-form">
        <input type="text" v-model="username" placeholder="Username" class="input-field" />
        <input type="password" v-model="password" placeholder="Password" class="input-field" />
        <button @click="login" class="button">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.username === 'user' && this.password === 'pass123') {
          localStorage.setItem('isAuthenticated', 'true');
          this.$store.commit('SET_AUTHENTICATED', true); 
          this.$router.push('/books'); 
        } else {
          alert('Invalid credentials. Please try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    margin: 0;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    background-color: #f5e1da;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #7b5d4d;
    border-radius: 4px;
  }
  
  .button {
    width: 100%;
    padding: 12px;
    background-color: #7b5d4d;
    color: #f8f1e5;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #56433d; 
  }
  </style>
  