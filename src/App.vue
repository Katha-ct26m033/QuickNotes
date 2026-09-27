<script setup lang="ts">
import BaseCard from './components/BaseCard.vue'
import SearchBar from './components/SearchBar.vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'
import { useNotes } from './composables/useNotes.js'

const { notes, addNote, deleteNote, search, filteredNotes } = useNotes()
</script>

<template>
  <BaseCard>
    <SearchBar v-model="search" />
    <NoteForm @add="addNote" />
    <NoteCard
      v-for="note in filteredNotes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
    />
  </BaseCard>
</template>