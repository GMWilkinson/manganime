
const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/manga-book';

module.exports = {
  dbURI: dbURI,
  port: port
};
