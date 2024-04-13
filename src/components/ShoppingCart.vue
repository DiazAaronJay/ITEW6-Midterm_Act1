<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <p class="total-price">Total Price: ${{ totalPrice }}</p>

    <div class="search-container">
      <input
        type="text"
        placeholder="Search by title or author"
        v-model="searchQuery"
        @input="handleSearch"
        class="search-input"
      />
    </div>

    <div v-if="cart.length === 0" class="empty-cart-message">
      Your cart is empty.
    </div>

    <ul v-if="filteredCart.length > 0">
      <li v-for="(item, index) in filteredCart" :key="item.id" class="cart-item">
        <div class="cart-item-details">
          <img :src="item.image" alt="Book Cover" class="cart-item-image">
          <div class="cart-item-info">
            <p class="cart-item-title">{{ item.title }}</p>
            <p class="cart-item-author">{{ item.author }}</p>
            <p class="cart-item-price">$ {{ item.price }}</p>
            <div class="quantity-controls">
              <button @click="decrementQuantity(index)" class="quantity-button">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="incrementQuantity(index)" class="quantity-button">+</button>
            </div>
          </div>
        </div>
        <button @click="removeFromCart(item.id)" class="button">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['totalPrice']),
    filteredCart() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.cart;
      }
      return this.cart.filter(item =>
        item.title.toLowerCase().includes(query) || item.author.toLowerCase().includes(query)
      );
    },
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    ...mapActions('cart', ['removeFromCart', 'incrementQuantity', 'decrementQuantity']),
    handleSearch() {
      
    },
    logout() {
      localStorage.removeItem('isAuthenticated');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
  position: relative; 
}

.logout-button {
  position: absolute;
  top: 20px; 
  right: 20px; 
  padding: 8px 16px;
  background-color: #7b5d4d; 
  color: #f8f1e5; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #56433d; 
}

.total-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.empty-cart-message {
  font-style: italic;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5e1da; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
}

.cart-item-details {
  display: flex;
  align-items: center;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.cart-item-price {
  font-weight: bold;
  color: #7b5d4d; 
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  padding: 6px;
  background-color: #7b5d4d; 
  color: #f8f1e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
}

.quantity {
  font-weight: bold;
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
</style>
