export interface IMusic {
  id: number;
  name: string;
  author: string;
  lyric: string[];
  lyricToUpdate: string;
  musicVideoUrl: string;
  musicHelpVideoUrl: string;
  sheetMusicFile: string;
  translatedLyric: string[];
  authors: {
    name: string
    imageUrl: string
  }
}

export interface IMusicCategory {
  id: number
  name: string
  authors: {
    name: string
  }
}

export interface IMusicAuthor {
  author: {
    name: string
    imageUrl: string
  }
  musics: {
    name: string
  }[]
}

export interface IMusics {
  name: string
  authors: {
    name: string
  }
  categories: {
    name: string
  }
}

export interface MusicInsertData {
  [key: string]: any
}
