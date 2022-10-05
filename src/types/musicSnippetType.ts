export interface IMusicSnippet {
  id: number
  musicSnippet: string
  snippetAid: any
  createdAt: Date
  users: {
    id: number
    name: string
  }
}

export type MusicSnippetInsertData = Omit<IMusicSnippet, 'id' | 'users' | 'createdAt'>
