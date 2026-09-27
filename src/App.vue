<script setup lang="ts">
import BaseCard from './components/BaseCard.vue'
import { useNotes } from './composables/useNotes.js'
import NoteForm from './components/NoteForm.vue' 

const { notes, addNote, deleteNote, search, filteredNotes } = useNotes()

</script>

<template>
  <BaseCard>
    <NoteForm @add="addNote" />
    <input v-model="search" placeholder="Suchen..." />
    <div v-for="note in filteredNotes" :key="note.id">
      {{ note.title }} {{ note.content }} {{ note.tags }}
    </div>
  </BaseCard>
</template>