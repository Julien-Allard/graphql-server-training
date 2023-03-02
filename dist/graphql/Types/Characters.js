export const Characters = `
  type Characters {
    info: {
      count: Number
      pages: Number
      next: String | null
      prev: String | null
    }
    results: [
      {
        id: Number
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin: {
          name: String
          url: String
        }
        location: {
          name: String
          url: String
        }
        image: String
        episode: String[]
        url: String
        created: String
      }
    ]
  }
`;
