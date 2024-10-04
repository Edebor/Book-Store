const books = [
  {
      title: "Canadian Apostolic Conference",
      author: "By Apostle Joshua Selman",
      price: "N1,500.00",
      image: "Christian book.jpg" // Path to your book image
  },
  {
      title: "Every Child is a Reading Champion",
      author: "By Edebor Bright",
      price: "N25,00.00",
      image: "design img.jpg"
  },
  
  {
      title: "the CATCHER in the RYE",
      author: "by J.D SALINGER ",
      price: "N30.00",
      image: "book cover1.jpg"
  },

  {
    title: "REDDOT INTERACTIVE PRIMARY ENGLISH",
    author: "By Edo State Government",
    price: "N18.00",
    image: "book2.jpg"

  }
];

function displayBooks() {
  const bookList = document.getElementById('book-list');
  books.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <h2>${book.title}</h2>
          <p>${book.author}</p>
          <p>${book.price}</p>
      `;
      bookList.appendChild(bookDiv);
  });
}

document.addEventListener('DOMContentLoaded', displayBooks);
