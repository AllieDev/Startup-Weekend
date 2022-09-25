<template>
  <CarbonEmissiom :open="isOpen" @accept="navigateAway" :data="modalData" />
  <form class="space-y-8 divide-y divide-gray-200 p-7">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5 mt-10">
      <div class="space-y-6 sm:space-y-5">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Create a New Listing
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This information will be displayed publicly to contractors.
          </p>
        </div>

        <div
          class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="last-name"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >Listing Title</label
          >
          <div class="mt-1 sm:col-span-2 sm:mt-0">
            <input
              v-model="form.title"
              placeholder="Needs a repair"
              type="text"
              name="listing-title"
              id="last-name"
              autocomplete="family-name"
              class="p-3 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        <div
          class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="last-name"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >Purchase price</label
          >
          <div class="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              v-model="form.value"
              placeholder="$70"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="p-3 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Description</label
            >
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <textarea
                v-model="form.description"
                placeholder="Jacket's button needs repair"
                id="about"
                name="about"
                rows="3"
                class="p-3 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
              <p class="mt-2 text-sm text-gray-500">
                Write a few sentences about your listing.
              </p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="cover-photo"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Photo of the damage</label
            >
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div
                class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        multiple
                        id="file-upload"
                        @change="onImageSelected"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <TabGroup as="div" class="flex flex-col-reverse">
                <!-- Image selector -->
                <div
                  class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
                >
                  <TabList class="grid grid-cols-4 gap-6">
                    <Tab
                      v-for="image in form.images"
                      :key="image"
                      class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      <span class="sr-only"> {{ image.name }} </span>
                      <span class="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          :src="image"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        :class="[
                          'ring-indigo-500',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                        ]"
                        aria-hidden="true"
                      />
                    </Tab>
                  </TabList>
                </div>
              </TabGroup>
            </div>
          </div>

          <div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                  <div>
                    <div
                      class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                      id="label-email"
                    >
                      Category
                    </div>
                  </div>
                  <div class="mt-4 sm:col-span-2 sm:mt-0">
                    <div class="max-w-lg space-y-4">
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="comments"
                            class="font-medium text-gray-700"
                            >Jackets</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="candidates"
                            v-model="form.categories"
                            name="candidates"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="candidates"
                            class="font-medium text-gray-700"
                            >Footwear</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="offers"
                            v-model="form.categories"
                            name="offers"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700"
                            >Vintage</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          @click="cancel"
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          @click="create"
          type="button"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { TabGroup } from '@headlessui/vue'
import CarbonEmissiom from './Carbon.vue'
import { negativeImpact, positiveImpact } from '../../data/dummy'
import axios from 'axios'
export default {
  data() {
    return {
      isValid: false,
      modalData: {
        impact: false,
        title: '',
        description: '',
        co2e: 0
      },
      isOpen: false,
      co2e: 0,
      form: {
        title: '',
        description: '',
        value: 0,
        categories: [],
        images: []
      }
    }
  },
  methods: {
    navigateAway() {
      this.isOpen = false
      this.$router.push('/')
    },
    create() {
      if (
        !this.form.images.length ||
        !this.form.title.length ||
        !this.form.description.length ||
        !this.form.categories.length ||
        this.form.value == null
      ) {
        alert('Form is invalid!')
        return
      }
      this.$store.commit('createListing', this.form)
      this.calculateCarbon()
      this.modalData = positiveImpact
      this.isOpen = true
    },
    cancel() {
      this.form = {
        title: '',
        description: '',
        value: '',
        images: [],
        categories: []
      }
      this.modalData = negativeImpact
      this.isOpen = true
    },
    onImageSelected(e) {
      const files = e.target.files
      const fileUrls = []
      console.log(e.target.files)
      for (let i = 0; i < files.length; i++) {
        console.log(URL.createObjectURL(files[i]))
        fileUrls.push(URL.createObjectURL(files[i]))
      }
      this.form.images = fileUrls
    },
    calculateCarbon() {
      const url = 'https://beta3.api.climatiq.io/estimate'
      const token = 'FHSSX4P6EZM52EP8KZB75AYX4D96'
      const data = {
        emission_factor: {
          activity_id: 'consumer_goods-type_wearing_apparel_furs',
          region: 'AU'
        },
        parameters: {
          money: this.form.value,
          money_unit: 'nzd'
        }
      }
      axios
        .post(url, data, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((result) => {
          this.co2e = result.data.co2e
          this.modalData.co2e = result.data.co2e
          const treeNum = this.co2e !== 0 ? (this.co2e < 27 ? 1 : 2) : 0
          this.modalData.description = `You saved ${treeNum} tree(s) by choosing to repair your cloth instead of sending it to landfills.`
        })
    }
  },
  components: {
    TabGroup,
    CarbonEmissiom
  }
}
</script>

<style></style>
