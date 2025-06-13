//finding booksin a specific genre
db.books.find({ genre: "Fiction" });
//books published in a certain year
db.books.find({ published_year: { $gt: 1950 } });
//books by a certain author
db.books.find({ author: "George Orwell" });
//updating a book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
);
//finding books in stock
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});
