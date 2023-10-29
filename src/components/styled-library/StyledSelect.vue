<script setup lang="ts">
// import { useField } from 'vee-validate'
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
      { id: 5, name: 'Object 5' },
      { id: 6, name: 'Object 6' },
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
const current = ref(null)
const isOpen = ref(false)

function toggleIsOpen() {
  isOpen.value = !isOpen.value
}

function chooseItem(item: object) {
  current.value = item
}

// function filterItems(data) {
//   return data.filter((el) => {
//     el[searchValue]
//   })
// }
</script>

<template>
  <div>
    {{ current }}

    <p>{{ searchValue }}</p>
    <label>
      <input name="search" type="text" :placeholder="placeholder" v-model="searchValue" />
      <p @click="toggleIsOpen">icon</p>
    </label>
    <ul v-show="isOpen">
      <li>Select</li>
      <li @click="() => chooseItem(item)" v-for="item in data" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
