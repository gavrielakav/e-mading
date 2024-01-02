document.addEventListener('DOMContentLoaded', function () {
    displayArticles();
});

function displayArticles() {
    var articlesContainer = document.getElementById('articleContainer');
    articlesContainer.innerHTML = '';

    // Assume articles is an array of objects with properties: title, content, and image
    articles.forEach((article, index) => {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="assets/${article.image}" alt="${article.title}" style="width:100%">
                          <h3>${article.title}</h3>`;
        
        // Attach click event to show article content
        card.addEventListener('click', function () {
            openModal(article.title, article.content);
        });

        articlesContainer.appendChild(card);
    });
}

function openModal(title, content) {
    var modal = document.getElementById('articleModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalContent = document.getElementById('modalContent');

    modalTitle.innerText = title;
    modalContent.innerText = content;

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('articleModal');
    modal.style.display = 'none';
}
