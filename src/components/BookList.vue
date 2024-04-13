<template>
    <div class="book-list">
      <h2>Available Books</h2>
      <div class="card-container">
        <div v-for="book in books" :key="book.id" class="card">
          <img :src="book.image" alt="Book Cover" class="card-image">
          <div class="card-details">
            <h3 class="card-title">{{ book.title }}</h3>
            <p class="card-author">{{ book.author }}</p>
            <p class="card-price">$ {{ book.price }}</p>
            <button @click="addToCart(book)" class="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      books() {
        return this.$store.getters.availableBooks;
      },
    },
    methods: {
      addToCart(book) {
        if (book && book.id) {
          this.$store.commit('ADD_TO_CART', { book, quantity: 1 });
        } else {
          console.error('Invalid book object:', book);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .book-list {
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .card {
    width: 250px;
    background-color: #f5e1da; 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 15px;
  }
  
  .card-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .card-author {
    font-style: italic;
    margin-bottom: 8px;
  }
  
  .card-price {
    font-weight: bold;
    color: #7b5d4d; 
  }
  
  .button {
    padding: 8px 16px;
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
  