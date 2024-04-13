<template>
  <div class="book-list">
    <h2>Available Books</h2>

    <!-- Search input for filtering books -->
    <div class="search-container">
      <input
        type="text"
        placeholder="Search by title or author"
        v-model="searchQuery"
        @input="handleSearch"
        class="search-input"
      />
    </div>

    <div class="card-container">
      <!-- Display filtered books -->
      <div v-for="book in filteredBooks" :key="book.id" class="card">
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
    filteredBooks() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.books;
      }
      return this.books.filter(book =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
      );
    },
  },
  data() {
    return {
      searchQuery: '', 
    };
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

.search-container {
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
