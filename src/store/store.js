import { createStore } from 'vuex'
import { selectedProducts, contractors, users, products } from '../data/dummy'

const store = createStore({
  state() {
    return {
      user: 'contractor',
      users: users,
      counter: 0,
      products: products,
      filterParam: '',
      selectedProduct: selectedProducts,
      contractors: contractors
    }
  },
  mutations: {
    updateSearchParam: (state, payload) => {
      state.filterParam = payload
    },
    setSelectedProduct: (state, payload) => {
      state.selectedProduct = { ...selectedProducts }
      state.selectedProduct.name = payload.name
      state.selectedProduct.description = payload.description
      state.selectedProduct.images = payload.images
      state.selectedProduct.price = payload.options
      state.selectedProduct.categories = payload.categories
    },
    setUserType: (state, payload) => {
      state.user = payload
    },
    createListing: (state, payload) => {
      state.products = [
        ...state.products,
        {
          id: Math.random(),
          name: payload.name,
          href: '#',
          price: payload.value,
          description: payload.description,
          options: 'budget $' + Math.random() * 10,
          images: payload.images,
          imageAlt: '',
          categories: payload.categories
        }
      ]
    }
  },
  getters: {}
})

export default store
