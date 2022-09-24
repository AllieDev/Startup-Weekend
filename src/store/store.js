import { createStore } from 'vuex'
import { selectedProducts, contractors, users } from '../data/dummy'

const store = createStore({
  state() {
    return {
      user: 'brand',
      users: users,
      counter: 0,
      products: [
        {
          id: 1,
          name: 'Damaged button',
          href: '#',
          price: '$256',
          description:
            'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
          options: 'budget $40',
          imageSrc:
            'https://storage.re-mint.com/longwaycalifornia/listings/10010389001-e7fdc2f7f651cb50dc34a091a943aa8e.jpeg',
          imageAlt:
            'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
          categories: ['Jackets']
        },
        {
          id: 2,
          name: 'Needs to be shorten',
          href: '#',
          price: '$32',
          description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
          options: 'budget $30',
          imageSrc:
            'https://storage.re-mint.com/longwaycalifornia/listings/40484499002-be3917322be33c00caca343e3f82fef9.jpeg',
          imageAlt: 'Front of plain black t-shirt.',
          categories: ['Jackets']
        },
        {
          id: 3,
          name: 'Modifying the actual pattern',
          href: '#',
          price: '$32',
          description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
          options: 'budget $12',
          imageSrc:
            'https://www.verywellfamily.com/thmb/-RntoulMuSjjFQsLwjQN3P64nFw=/fit-in/1178x1142/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2022-02-11at9.52.58AM-1d9f25e8a1b640d7adbbda419ef731b3.png',
          imageAlt: 'Front of plain black t-shirt.',
          categories: ['Jackets']
        },
        {
          id: 4,
          name: 'shorten the body of a top',
          href: '#',
          price: '$32',
          description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
          options: 'budget $23',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
          imageAlt: 'Front of plain black t-shirt.',
          categories: ['Jackets']
        },
        {
          id: 5,
          name: 'Letting out a seam',
          href: '#',
          price: '$32',
          description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
          options: 'budget $10',
          imageSrc:
            'https://storage.re-mint.com/longwaycalifornia/listings/18795276001-01b7dc4e474243ce08a3df2da468f856.jpeg',
          imageAlt: 'Front of plain black t-shirt.',
          categories: ['Jackets']
        },
        {
          id: 6,
          name: 'Taking in a seam',
          href: '#',
          price: '$32',
          description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
          options: 'budget $21',
          imageSrc:
            'https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8=',
          imageAlt: 'Front of plain black t-shirt.',
          categories: ['Jackets']
        }
      ],
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
      state.selectedProduct.images = [
        { ...state.selectedProduct.images[0], src: payload.imageSrc }
      ]
      state.selectedProduct.price = payload.options
      state.selectedProduct.categories = payload.categories
    },
    setUserType: (state, payload) => {
      state.user = payload
    }
  },
  getters: {}
})

export default store
