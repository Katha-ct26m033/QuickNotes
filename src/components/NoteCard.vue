<script setup>
const props = defineProps({
  note: { type: Object, required: true }
})
const emit = defineEmits(['delete'])
</script>

<template>
    <h3>{{ note.title }}</h3>
    <p>{{ note.content }}</p>
    <span v-for="tag in note.tags" :key="tag">{{ tag }}</span>
    <button @click="emit('delete', note.id)">Delete note</button> 
</template>