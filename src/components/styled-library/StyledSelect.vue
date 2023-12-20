<script setup>
// import { useField } from 'vee-validate'
import debounce from 'lodash.debounce'
import { ref, onBeforeUnmount, watch } from 'vue'
import BaseSvg from '../base/BaseSvg.vue'
import IconArrowDown from '@/assets/lib/icons/20px/IconArrowDown.vue'
import IconArrowUp from '@/assets/lib/icons/20px/IconArrowUp.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
      { id: 5, name: 'Object 5' },
      { id: 6, name: 'Los santos avenue' },
      { id: 7, name: 'Object 7' },
      { id: 8, name: 'Object 8' },
      { id: 9, name: 'Object 9' },
      { id: 10, name: 'Object 10' }
    ]
  },
  searchBy: { type: String, required: true },
  placeholder: { type: String, default: 'Placeholder' }
})

const searchValue = ref('')
const filteredData = ref([...props.data])
const current = ref(null)
const isOpen = ref(false)

function toggleIsOpen() {
  isOpen.value = !isOpen.value
}

function chooseItem(item) {
  current.value = item
  searchValue.value = item[props.searchBy]
}

function filterItems() {
  if (!searchValue.value) {
    filteredData.value = props.data
    return
  }
  // if (current.value) {
  //   filteredData.value = props.data
  //   return
  // }
  const filtered = props.data.filter((el) => {
    return el[props.searchBy].includes(searchValue.value)
  })
  filteredData.value = filtered
}
const debouncedWatch = debounce(() => {
  console.log('New value:', searchValue.value)
  filterItems()
  console.log(filteredData.value.length)
}, 500)

watch(searchValue, debouncedWatch)

onBeforeUnmount(() => {
  debouncedWatch.cancel()
})
</script>

<template>
  <div class="relative">
    <label class="relative">
      <input
        class="input-base-item select-menu-base-item"
        name="search"
        type="text"
        :placeholder="placeholder"
        v-model="searchValue"
      />
      <!-- @focusout="toggleIsOpen" -->

      <div class="absolute top-0 right-[16px]" @click="toggleIsOpen">
        <BaseSvg v-if="!isOpen" icon-color="white"><IconArrowDown /></BaseSvg>
        <BaseSvg v-else icon-color="white"><IconArrowUp /></BaseSvg>
      </div>
    </label>
    <ul class="select-base-item-list" v-show="isOpen">
      <!-- <li v-if="!filteredData.length">Select the option</li> -->
      <li v-if="!filteredData.length">Nothing here..</li>
      <li
        class="select-base-item"
        @click="() => chooseItem(item)"
        v-for="item in filteredData"
        :key="item.id"
      >
        {{ item[searchBy] }}
      </li>
    </ul>
  </div>
</template>
