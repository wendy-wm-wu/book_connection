import React from 'react';

const Book = (props) => {
  return (
    <div>
      <div className={`${props.rank}`}></div>
      <p><img className={`cover ${props.rank}`} id="cover" src={`${props.image}`} /></p>
      <h4>By {props.author}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default Book;


// nytimesBestSellers.results.forEach(function(book) {
//   var isbn = book.isbns[1].isbn10;
//   var bookInfo = book.book_details[0];
//   var lastWeekRank = book.rank_last_week || 'n/a';
//   var weeksOnList = book.weeks_on_list || 'New this week!';
//   var listing = 
//       '<div id="' + book.rank + '" class="entry">' + 
//         '<p>' + 
//         '<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png" class="book-cover" id="cover-' + book.rank + '">' + 
//         '</p>' + 
//         '<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' +
//         '<h4>By ' + bookInfo.author + '</h4>' +
//         '<h4 class="publisher">' + bookInfo.publisher + '</h4>' +
//         '<p>' + bookInfo.description + '</p>' + 
//         '<div class="stats">' +
//           '<hr>' + 
//           '<p>Last Week: ' + lastWeekRank + '</p>' + 
//           '<p>Weeks on list: ' + weeksOnList + '</p>' +
//         '</div>' +
//       '</div>';