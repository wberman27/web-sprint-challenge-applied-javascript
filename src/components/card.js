import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  article.forEach(sub =>{    
    const cardDiv = document.createElement("div"); //create these elements on the dom
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorByText = document.createElement("span");
    
    cardDiv.classList.add("card"); //adding class names
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    img.setAttribute("src", `${sub["authorPhoto"]}`);
    authorByText.textContent = `By ${sub["authorName"]}`;
    headline.textContent = `${sub["headline"]}`;
  
    cardDiv.appendChild(headline); //dom structuring
    cardDiv.appendChild(author);
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorByText)
  
    
    
    cardDiv.addEventListener("click", (e)=>{ //on click event on the div... log the article headline
      console.log(sub["headline"]);
    })
    
    const cardC = document.querySelector(".cards-container").appendChild(cardDiv);
  }) //closes forEach
}//closes Card function

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  const cards = document.querySelector(selector)

  axios.get(`https://lambda-times-api.herokuapp.com/articles`) //get the endpoint data
  .then(res =>{

    Card(res.data.articles.javascript)
    Card(res.data.articles.bootstrap)
    Card(res.data.articles.technology)
    Card(res.data.articles.jquery)
    Card(res.data.articles.node)
    
  })
  .catch(err =>{
    console.log(err);
  })


}

export { Card, cardAppender }
