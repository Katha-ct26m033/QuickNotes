<script setup>
import { ref } from 'vue'
const tippedTitle = ref('')
const tippedText = ref('')
const tippedTags = ref('')

const emit = defineEmits(['add'])

function submitNote() {
  const newTags = tippedTags.value
  .split(',')
  .map(tag => tag.trim())
  .filter(tag => tag !== '')

  emit('add', {                                
    title: tippedTitle.value,
    content: tippedText.value,
    tags: newTags
  })
  tippedTitle.value = '';
  tippedText.value = '';
  tippedTags.value = '';
}

</script>

<template>
    <form @submit.prevent="submitNote">
        <input v-model="tippedTitle"/>
        <textarea v-model="tippedText"></textarea>
        <input v-model="tippedTags" placeholder="Tags (Komma-getrennt)"/>
        <button type="submit">Add note</button>
    </form>
</template>