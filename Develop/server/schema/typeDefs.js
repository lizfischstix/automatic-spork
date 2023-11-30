const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedbyUser: [Book]
  }

  type Book {
    _id: ID
    bookTitle: String!
    bookAuthors: String!
    savedBooks: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    book: [Book]
    bookAuthors(_id: String): [Book]
    bookTitle (_id: String): [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookTitle: String!): Book
    removeBook(_id: ID!): Book
  }
`;

module.exports = typeDefs;
