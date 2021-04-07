const newsurl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe";


function renderArticles(articles) {
  const newsList = document.getElementById("news-list")

  const articlesHTMLArray = articles.map((a) => {
    return `
      <div class="card mb-5" style="width: 18rem;">
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
  const response = await fetch(newsurl);
  const data = await response.json()
  renderArticles(data.articles)
}

fetchDataES6AsyncAwait()