const tweets = [
    "FREE PUFF.",
    "I no longer have a manager. I can't be managed.",
    "You may be talented, but you're not Kanye West.",
    "The world needs more visionaries.",
    "I AM YEHOOVA.",
];
const audioClips = ["audio/ye1.mp3", "audio/ye2.mp3", "audio/ye3.mp3"];

const tweetEl = document.getElementById('tweet-text');
const audioEl = document.getElementById('kanyeAudio');
document.getElementById('generate-btn').onclick = () => {
    const newTweet = tweets[Math.floor(Math.random() * tweets.length)];
    const clip = audioClips[Math.floor(Math.random() * audioClips.length)];
    audioEl.src = clip;
    audioEl.play();
    tweetEl.innerText = newTweet;
};
