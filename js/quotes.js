const quotes = [{
    quote : '서당개 삼년이면 풍월을 읊는다.',
    author : '한국 속담',
},
{   
    quote : 'just do it',
    author : "nike's slogan",
}, 
{
    quote : '나비처럼 날아서 벌처럼 쏜다',
    author : '무하마드 알리',
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;