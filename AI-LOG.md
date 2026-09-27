# AI-LOG

1)
Prompt: "wie verkette ich split, map und filter für Tags in NoteForm"
Übernommen: die Methodenkette .split(',').map(t => t.trim()).filter(t => t !== '')
Geändert/verstanden: zuerst standen map/filter einzeln ohne Zuweisung (Ergebnis wurde
verworfen); verstanden, dass map/filter ein NEUES Array zurückgeben und man das Ergebnis
auffangen bzw. verketten muss.

2)
Prompt: "wie zeigt eine Vue-Komponente eine Notiz als Prop an (NoteCard)"
Übernommen: defineProps und emit('delete', note.id)
Geändert/verstanden: als Payload schicke ich nur die id statt dem ganzen Objekt, weil
deleteNote(noteId) in useNotes eine id erwartet. emit ist ein Funktionsaufruf mit dem
Event-Namen als erstes Argument, kein emit.delete.

3)
Prompt: "warum filtert die Suche nicht / TEST-Zeile zeigt search = ''"
Übernommen: Diagnose-Vorgehen mit TEST-Ausgabezeile (search vs. Anzahl gefilterter Notizen)
Geändert/verstanden: eigener Bug – useNotes hat search nicht in der return-Liste gehabt,
deshalb war es in App.vue undefined. Verstanden: lokale Variablen in Composables sind
außen unsichtbar, return ist der einzige Exportweg.

4)
Prompt: "wie funktioniert v-model auf einer eigenen Komponente (SearchBar)"
Übernommen: defineProps(['modelValue']), defineEmits(['update:modelValue']),
:value + @input mit $emit('update:modelValue', $event.target.value)
Geändert/verstanden: v-model auf einer Komponente ist nur dieses Protokoll; die Prop selbst
darf nicht verändert werden (Ein-Weg-Fluss: Prop runter, Event rauf).

5)
Prompt: "wozu brauche ich das Note-Interface und wie verwende ich es"
Übernommen: typisierte Props über defineProps<{ note: Note }>() mit lang="ts"
Geändert/verstanden: das Interface ist ein Vertrag – die Komponente weiß garantiert, welche
Felder eine Note hat; Tippfehler fallen zur Compile-Zeit auf. Die Typisierung liegt auf der
NoteCard-Prop, useNotes.js bleibt untypisiert.

6)
Prompt: "wie halte ich NoteForm, NoteCard und App.vue im ein-Weg-Datenfluss zusammen"
Übernommen: Struktur: App.vue ruft useNotes() einmal auf, reicht filteredNotes als Props
an NoteCard, nimmt Events (add, delete) und v-model (search) entgegen
Geändert/verstanden: verstanden, dass so genau eine Quelle der Wahrheit entsteht –
Komponenten halten selbst keinen Zustand, useNotes ist die einzige ändernde Stelle.

7)
Prompt: "warum verliert die Suche nach einem Reload nichts / wie bleibt search mit
der gefilterten Liste konsistent"
Übernommen: computed für filteredNotes statt eigener Filter-Funktion
Geändert/verstanden: computed rechnet automatisch neu, wenn sich notes oder search ändern –
man muss nichts von Hand synchron halten. Genau deshalb ist die Liste nie inkonsistent.