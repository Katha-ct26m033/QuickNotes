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
        <input v-model="tippedTitle" placeholder="Add title"/>
        <textarea v-model="tippedText" placeholder="Add content"></textarea>
        <input v-model="tippedTags" placeholder="Tags (Komma-getrennt)"/>
        <button type="submit">Add note</button>
    </form>
</template>

<style scoped>
  /* CSS-Regeln, die NUR für diese Komponente gelten */
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    font-kerning: normal;

  }

  input, textarea {
    width: 280px;
  }
</style>