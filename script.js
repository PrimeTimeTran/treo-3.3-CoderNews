let newsurl =
  "https://newsapi.org/v2/top-headlines?apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe";


let userlanguage = 'us'


function renderArticles(articles) {
  const newsList = document.getElementById("news-list")

  const articlesHTMLArray = articles.map((a) => {
    return `
      <div class="card mb-5" style="width: 100%">
        <img src="${a.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${a.title}</h5>
          <p class="card-text">${a.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  });

  newsList.innerHTML = articlesHTMLArray.join('')
}

// 1 Pre ES6 Not preferred
function fetchDataPreES6() {
  const promise = fetch(newsurl);
  promise
    .then((res) => res.json())
    .then((data) => renderArticles(data.articles));
}

// fetchDataPreES6()

// 2 ES6 New Way using Async/Await
async function fetchDataES6AsyncAwait() {
  const url = newsurl + `&country=${userlanguage}`
  const response = await fetch(url);
  const data = await response.json()
  renderArticles(data.articles)
}

fetchDataES6AsyncAwait()

function selectLanguage(lang) {
  userlanguage = lang
  fetchDataES6AsyncAwait();
}


// 1. Postman to save API requests
// 2. Explain URL Parameters and how they effect the data we get
// 3. Demo how we can add a onClick() attribute to a button and invoke a JS function from it.
// 4. Show how manipulating a URL produces different data results.


// document.getElementById("german").addEventListener('click', function() {
//   console.log('clicked German!')
// });

// document.getElementById("english").addEventListener('click', function() {
//   console.log('clicked English!')
// });