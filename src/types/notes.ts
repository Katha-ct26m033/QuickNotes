export interface Note {
  id: number
  title: string
  content: string
  tags: string[]
}

// id: string mit crypto.randomUUID(); Vorteil: garantiert eindeutig auch über Reloads/Imports hinweg