import React from "react";

function Book({ book }) {
  return (
    <div class="card-container">
      <div className="card">
        <img src={book.image_url} alt="cover" />
        <div className="card-content">
          <h5 className="card-title">{book.title}</h5>
          <h5 className="card-author">{book.authors}</h5>
          <h5 className="card-description">{book.genres}</h5>
        </div>
      </div>
    </div>
  );
}

export default Book;
