<template>
  <ContractorModal
    :product="selectedContractor"
    :open="isOpen"
    @close="closeModal"
  />
  <div class="bg-white contractors">
    <h1 class="heading">Contractors:</h1>
    <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="product in contractors"
          :key="product.id"
          class="group relative border-r border-b border-gray-200 p-4 sm:p-6"
          @click="selectContractor(product)"
        >
          <div
            class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="pt-10 pb-4 text-center">
            <h3 class="text-base font-medium text-gray-900">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="mt-4 text-sm font-medium text-gray-900">
              {{ product.description }}
            </p>
            <div class="mt-3 flex flex-col items-center">
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    product.rating > rating
                      ? 'text-yellow-400'
                      : 'text-gray-200',
                    'flex-shrink-0 h-5 w-5'
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="mt-1 text-sm text-gray-500">
                {{ product.reviewCount }} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/20/solid'
import { mapState } from 'vuex'
import ContractorModal from '../contractors/ContractorModal.vue'

export default {
  data() {
    return {
      selectedContractor: {
        name: null
      }
    }
  },
  computed: {
    ...mapState({
      contractors: (state) => state.contractors
    }),
    isOpen() {
      return this.selectedContractor?.name !== null
    }
  },
  components: {
    StarIcon,
    ContractorModal
  },
  methods: {
    selectContractor(contractor) {
      this.selectedContractor = contractor
    },
    closeModal() {
      this.selectedContractor = {}
    }
  }
}
</script>
<style>
.contractors {
  padding: 12px;
}

.heading {
  padding: 12px;
  padding-left: 30px;
  font-weight: bold;
}
</style>
