<script setup>
const props = defineProps({
  note: { type: Object, required: true }
})
const emit = defineEmits(['delete'])
</script>

<template>
    <div class="note-card">
        <p>{{ note.title }}</p>
        <p>{{ note.content }}</p>
        <div class="tags-wrapper">
            <span v-for="tag in note.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button @click="emit('delete', note.id)">Delete note</button> 
    </div>
</template>

<style scoped>

.note-card {
    display: flex;
    flex-direction: row;
    background-color: #eff0f4;     
    border-radius: 8px;        
    padding: 12px 16px;  
    align-items: center;
    justify-content: space-between;
    margin: 0 0 24px 0;
}

.tag {
  background-color: #dbdde4;  
  border-radius: 999px;        
  padding: 2px 10px;           
  margin-right: 6px;
  font-size: 12px;
}

button {
    padding: 8px;
}
</style>