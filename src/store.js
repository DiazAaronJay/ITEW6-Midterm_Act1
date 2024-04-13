import { createStore } from 'vuex';

const store = createStore({
  state: {
    books: [
        { id: 1, title: 'One Piece', author: 'Author A', price: 15, image: 'image/img1.jpg'  },
        { id: 2, title: 'Dragon Ball Super', author: 'Author B', price: 12, image: 'image/img10.jpg' },
        { id: 3, title: 'Bleach', author: 'Author C', price: 18, image: 'image/img3.jpg'  },
        { id: 4, title: 'Naruto', author: 'Author D', price: 20, image: 'image/img4.jpg'  },
        { id: 5, title: 'My Hero Academia', author: 'Author E', price: 25, image: 'image/img5.jpg'  },
        { id: 6, title: 'HunterxHunter', author: 'Author F', price: 16, image: 'image/img6.jpg'  },
        { id: 7, title: 'Ghost Fighter', author: 'Author G', price: 14, image: 'image/img7.jpg'  },
        { id: 8, title: 'Haikyu', author: 'Author H', price: 22, image: 'image/img8.jpg'  },
        { id: 9, title: 'Fire Force', author: 'Author I', price: 19, image: 'image/img9.jpg'  },
        { id: 10, title: 'Jujutsu Kaisen', author: 'Author J', price: 17, image: 'image/img2.jpg'  },
    ],
    cart: [], 
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'false',
  },
  mutations: {
    ADD_TO_CART(state, { book, quantity }) {
      if (!book || !book.id) {
        console.error('Invalid book object:', book);
        return;
      }
  
      const existingItem = state.cart.find(item => item.id === book.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ ...book, quantity });
      }
    },
    REMOVE_FROM_CART(state, bookId) {
      state.cart = state.cart.filter(item => item.id !== bookId);
    },
    INCREMENT_QUANTITY(state, index) {
      state.cart[index].quantity++;
    },
    DECREMENT_QUANTITY(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      localStorage.setItem('isAuthenticated', isAuthenticated);
    },
  
  },
  
  getters: {
    availableBooks: state => state.books,
    cartItems: state => state.cart,
    cartTotalPrice: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    isAuthenticated: state => state.isAuthenticated,
  },
});

export default store;
