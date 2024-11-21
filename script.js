
const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');
const charCount = document.getElementById('char-count');
const tweetsContainer = document.getElementById('tweets-container');


let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

s
function renderTweets() {
  tweetsContainer.innerHTML = ''; 
  tweets.slice().reverse().forEach((tweet, index) => {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');
    tweetElement.innerHTML = `
      <div class="content">${tweet.content}</div>
      <div class="likes">
        <span>${tweet.likes} Likes</span>
        <button onclick="likeTweet(${index})">Like</button>
      </div>
    `;
    tweetsContainer.appendChild(tweetElement);
  });
}


tweetInput.addEventListener('input', () => {
  charCount.textContent = `${tweetInput.value.length}/280`;
});


tweetBtn.addEventListener('click', () => {
  const tweetContent = tweetInput.value.trim();

  if (tweetContent) {
    const newTweet = {
      content: tweetContent,
      likes: 0
    };

    tweets.push(newTweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    tweetInput.value = '';
    charCount.textContent = '0/280';
    renderTweets();
  }
});


function likeTweet(index) {
  tweets[index].likes++;
  localStorage.setItem('tweets', JSON.stringify(tweets));
  renderTweets();
}


renderTweets();
