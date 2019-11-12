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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    
    let bootstrap = response.data.articles.bootstrap;
    let javascript = response.data.articles.javascript;
    let jquery = response.data.articles.jquery;
    let node = response.data.articles.node;
    let technology = response.data.articles.technology;
    

    const generator = (article) => {
      cardContainer.appendChild(newCard(article.authorName, article.authorPhoto, article.headline));  
    };

    bootstrap.forEach(generator);
    javascript.forEach(generator);
    jquery.forEach(generator);
    node.forEach(generator);
    technology.forEach(generator);

  });

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
  cardImg.classList.add('img-container');
  
  cardHeadline.textContent = headline;
  cardImg.src = photo;
  cardAuthorName.textContent = name;


  return card

}

const cardContainer = document.querySelector('.cards-container');


 

