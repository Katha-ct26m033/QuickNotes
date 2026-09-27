<script setup lang="ts">
import BaseCard from './components/BaseCard.vue'
import { useNotes } from './composables/useNotes.js'
import NoteForm from './components/NoteForm.vue' 
import NoteCard from './components/NoteCard.vue'

const { notes, addNote, deleteNote, search, filteredNotes } = useNotes()

</script>

<template>
  <BaseCard>
    <NoteForm @add="addNote" />
    <input v-model="search" placeholder="Suchen..." />
    <NoteCard
      v-for="note in filteredNotes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
    />
  </BaseCard>
</template>