export interface IAuthorByCategory {
  name: string
  imageUrl: string
}

export interface IAuthors {
  name: string
  imageUrl: string
  categories: {
    name: string
  }
}
