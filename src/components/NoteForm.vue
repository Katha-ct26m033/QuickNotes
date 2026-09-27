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
    align-items: center;
    margin: 0 auto;
    width: 280px;
    padding: 24px;
    gap: 16px;
  }

  input, textarea, button {
    width: 100%;      
    box-sizing: border-box;   
  }

  form {
    align-items: stretch;  
  }

</style>