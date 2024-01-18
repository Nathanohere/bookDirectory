const Book = require('./bookModel');

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: 'success',
      data: {
        books,
      },
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        book,
      },
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newBook,
      },
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'success',
      data: {
        book,
      },
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id);
    res.status(201).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};
