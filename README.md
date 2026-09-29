# QuickNotes

Eine kleine Notiz-App mit Vue 3: Notizen mit Tags anlegen, löschen, live durchsuchen,
persistiert im localStorage.

## Setup

1. Repository klonen
2. `npm install`
3. `npm run dev`
4. Im Browser öffnen: http://localhost:5173

## Struktur

Die gesamte Notiz-Logik (Liste, addNote, deleteNote, Live-Filter) liegt im Composable
`useNotes.js`, die Persistenz im Composable `useLocalStorage.js`. Die Komponenten enthalten
nur Darstellung und Eingaben – sie rufen die Composable-Funktionen auf und verwalten selbst
keine Daten. Dadurch gibt es eine einzige Quelle der Wahrheit, und der ein-Weg-Datenfluss
bleibt erhalten: Props gehen nach unten, Events nach oben (emit).

## Reflexion

**Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löse ich das stattdessen?**
Props sind verliehenes Eigentum des Eltern-Elements (ein-Weg-Datenfluss). Würde NoteCard die
Prop direkt mutieren, wäre nicht mehr nachvollziehbar, wer die Daten geändert hat. Deshalb
meldet NoteCard nur, DASS etwas passieren soll: `emit('delete', note.id)`. App.vue ruft dann
`deleteNote(noteId)` aus useNotes auf – die einzige Stelle, die die Notiz-Liste ändert.

**Was passiert, wenn zwei Komponenten dieselbe useNotes() aufrufen – teilen sie sich die Notizen?**
Nein. Jeder Aufruf von useNotes() erzeugt neue, lokale refs (notes, search). Zwei Komponenten mit
je eigenem useNotes()-Aufruf hätten zwei getrennte Notiz-Listen (und zwei localStorage-Watches auf
demselben Key). In dieser App ruft nur App.vue useNotes() genau einmal auf und reicht die Daten
als Props weiter – so gibt es genau eine geteilte Quelle.

**Wozu dient das Note-Interface, wenn der Code auch ohne liefe?**
Das Interface ist ein Vertrag: Jede Komponente, die mit Notes arbeitet, weiß garantiert, welche
Felder existieren (id, title, content, tags) und welche Typen sie haben. Tippfehler wie
`note.titel` werden schon beim Kompilieren erkannt statt zur Laufzeit. Gleichzeitig dient es
als Dokumentation der Datenform über das ganze Projekt hinweg.