const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./bookModel');
const bookRouter = require('./bookRoute');

dotenv.config({ path: './config.env' });
const app = require('./app');
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB connection is successfull');
});

const books = JSON.parse(
  fs.readFileSync(`${__dirname}/data/dev-data.json`, 'utf-8')
);
console.log('books', books);

const importData = async () => {
  try {
    await Book.create(books);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }
};

importData();

app.use('/api/v1/books', bookRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
