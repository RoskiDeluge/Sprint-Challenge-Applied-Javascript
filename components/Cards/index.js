// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const newCard = (name, photo, headline) => {
  const card = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthorName = document.createElement('span');

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImg);
  cardAuthor.appendChild(cardAuthorName);

  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  
  cardHeadline.textContent = headline;
  cardImg.src = photo;
  cardAuthorName = name;
  

  return card

}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    // const newArticlesB = response.data.articles.bootstrap;
    // newTopics.forEach(topic => {
    //   let li = document.createElement('div');
    //   li.textContent = topic;
    //   parentElement.appendChild(li);
    // })
  });

  // data.articles.bootstrap Array 3 objects authorName, authorPhoto, headline
  // data.articles.javascript
  // data.articles.jquery
  // data.articles.node
  // data.articles.technology

 

