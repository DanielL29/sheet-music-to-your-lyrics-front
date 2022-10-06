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
