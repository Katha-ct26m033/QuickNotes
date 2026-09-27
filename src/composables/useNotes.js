import { ref, computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])
  const search = ref('')
 
  function addNote(newNote) {
    // TODO: neue Notiz mit eigener id an die Liste hängen
    notes.value.push( { ...newNote, id: Date.now() } ); 
  }
 
  function deleteNote(noteId) {
    // TODO: Notiz mit dieser id entfernen
    // Step 1: Find the index of the notes with the matching id
    const index = notes.value.findIndex(note => note.id === noteId);

    // Step 2: Remove the note at that index using splice
    if (index !== -1) { // Only splice if a matching note was found
      notes.value.splice(index, 1); // Remove 1 item starting at `index`
    }
  }
 
  const filteredNotes = computed(() => { // computed already shows it is a function
      // TODO: nach Titel, Text oder Tag filtern
    const searchTerm = search.value.toLowerCase()
    return notes.value.filter ( note => 
      note.title.toLowerCase().includes(searchTerm) ||
      note.content.toLowerCase().includes(searchTerm) ||
      note.tags.some(tag => tag.toLowerCase().includes(searchTerm))  
    )
  }) 
 
  return { notes, addNote, deleteNote, search, filteredNotes }
}
